import { Router } from "express";

export const authHandler = Router();

authHandler.get("/health", (req, res) => {
    return res.status(200).json({
        Message: "Auth route up and running"
    });
});