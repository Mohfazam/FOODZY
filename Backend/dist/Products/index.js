"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productHandler = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
exports.productHandler = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
exports.productHandler.get("/health", (req, res) => {
    return res.status(200).json({
        Message: "Products route up and running"
    });
});
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
            return res
                .status(409)
                .json({ message: "Product already exists in this category" });
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
exports.productHandler.get("/allProducts", async (req, res) => {
    try {
        const { category, search, sort, limit } = req.query;
        const filters = {};
        if (category) {
            filters.category = {
                name: { equals: String(category), mode: "insensitive" },
            };
        }
        if (search) {
            filters.OR = [
                { name: { contains: String(search), mode: "insensitive" } },
                { description: { contains: String(search), mode: "insensitive" } },
            ];
        }
        const orderBy = {};
        if (sort === "price_asc")
            orderBy.price = "asc";
        else if (sort === "price_desc")
            orderBy.price = "desc";
        else if (sort === "rating_desc")
            orderBy.rating = "desc";
        const take = limit ? parseInt(String(limit)) : 50;
        const products = await prisma.product.findMany({
            where: filters,
            orderBy,
            take,
            include: { category: true },
        });
        return res.status(200).json({ products });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to fetch products" });
    }
});
exports.productHandler.get("/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await prisma.product.findUnique({
            where: { id },
            include: {
                category: true,
                reviews: true,
            },
        });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ product });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to fetch product" });
    }
});
exports.productHandler.get("/categories", async (req, res) => {
    try {
        const categories = await prisma.category.findMany({
            include: {
                products: true,
            },
        });
        return res.status(200).json({ categories });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to fetch categories" });
    }
});
//# sourceMappingURL=index.js.map