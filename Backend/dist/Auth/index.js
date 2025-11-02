"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authHandler = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const emailService_1 = require("../utils/emailService");
const prisma = new client_1.PrismaClient();
exports.authHandler = (0, express_1.Router)();
exports.authHandler.get("/health", (req, res) => {
    return res.status(200).json({
        Message: "Auth route up and running"
    });
});
exports.authHandler.post("/request-otp", async (req, res) => {
    const email = req.body.email;
    if (!email)
        return res.status(400).json({ message: "Email is required" });
    try {
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
        await prisma.oTP.deleteMany({ where: { email } });
        await prisma.oTP.create({
            data: {
                email,
                code: otpCode,
                expiresAt,
            },
        });
        await (0, emailService_1.sendOtpEmail)(email, otpCode);
        return res.json({ message: "OTP sent successfully" });
    }
    catch (error) {
        console.error("Error sending OTP:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});
//# sourceMappingURL=index.js.map