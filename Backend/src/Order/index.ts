import { Router } from "express";
import { PrismaClient } from "@prisma/client";


export const ordersHandler = Router();

ordersHandler.get("/health", (req, res) => {
    res.status(200).json({
        Message: "Orders end Point up and running"
    });
});