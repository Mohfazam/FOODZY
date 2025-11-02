"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productHandler = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
exports.productHandler = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
exports.productHandler.post("/add", async (req, res) => {
    try {
        const { name, description, basicInfo, image, brand, flavour, dietType, weight, speciality, ingredients, items, price, stock, categoryName, } = req.body;
        if (!name || !price) {
            return res.status(400).json({ message: "Name and price are required" });
        }
        let category = null;
        if (categoryName) {
            category = await prisma.category.findUnique({
                where: { name: categoryName },
            });
            if (!category) {
                category = await prisma.category.create({
                    data: { name: categoryName },
                });
            }
        }
        const existingProduct = await prisma.product.findFirst({
            where: {
                name,
                categoryId: category.id,
            },
        });
        if (existingProduct) {
            return res.status(409).json({ message: "Product already exists in this category" });
        }
        const newProduct = await prisma.product.create({
            data: {
                name,
                description,
                basicInfo,
                image,
                brand,
                flavour,
                dietType,
                weight,
                speciality,
                ingredients,
                items: items ? Number(items) : null,
                price: Number(price),
                stock: stock ? Number(stock) : 0,
                categoryId: category ? category.id : null,
            },
            include: { category: true },
        });
        return res.status(201).json({
            message: "Product added successfully",
            product: newProduct,
        });
    }
    catch (error) {
        console.error("Error adding product:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
});
//# sourceMappingURL=index.js.map