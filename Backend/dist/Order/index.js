"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersHandler = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_1 = require("../middleware/auth");
const prisma = new client_1.PrismaClient();
exports.ordersHandler = (0, express_1.Router)();
exports.ordersHandler.get("/health", (req, res) => {
    res.status(200).json({
        Message: "Orders end Point up and running"
    });
});
exports.ordersHandler.post("/place", auth_1.verifyToken, async (req, res) => {
    try {
        const userId = req.user.id;
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
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error placing order", error: err.message });
    }
});
exports.ordersHandler.get("/fetch", auth_1.verifyToken, async (req, res) => {
    try {
        const { email } = req.user;
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const orders = await prisma.order.findMany({
            where: { userId: user.id },
            include: {
                orderItems: {
                    include: {
                        product: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return res.status(200).json({ orders });
    }
    catch (error) {
        console.error("Error fetching orders:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
});
//# sourceMappingURL=index.js.map