import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../middleware/auth";

const prisma = new PrismaClient();


export const ordersHandler = Router();

ordersHandler.get("/health", (req, res) => {
    res.status(200).json({
        Message: "Orders end Point up and running"
    });
});


ordersHandler.post("/place", verifyToken, async (req, res) => {
  try {
    const userId = (req as any).user.id;
    const { products, shipping } = req.body;

    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: "Products are required" });
    }

    if (!shipping) {
      return res.status(400).json({ message: "Shipping details are required" });
    }

    // Verify all products exist
    const existingProducts = await prisma.product.findMany({
      where: { id: { in: products.map((p) => p.id) } },
    });

    if (existingProducts.length !== products.length) {
      return res.status(404).json({ message: "One or more products not found" });
    }

    // Calculate total amount
    const totalAmount = existingProducts.reduce((sum, product) => {
      const selected = products.find((p) => p.id === product.id);
      return sum + product.price * (selected?.quantity || 1);
    }, 0);

    // Create order + items
    const order = await prisma.order.create({
      data: {
        userId,
        totalAmount,
        firstName: shipping.firstName,
        lastName: shipping.lastName,
        address: shipping.address,
        city: shipping.city,
        postCode: shipping.postCode,
        country: shipping.country,
        regionState: shipping.regionState,

        orderItems: {
          create: existingProducts.map((product) => {
            const selected = products.find((p) => p.id === product.id);
            const quantity = selected?.quantity || 1;
            return {
              productId: product.id,
              quantity,
              price: product.price, // ✅ required field added
            };
          }),
        },
      },
      include: {
        orderItems: { include: { product: true } },
      },
    });

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: "Error placing order", error: err.message });
  }
});




