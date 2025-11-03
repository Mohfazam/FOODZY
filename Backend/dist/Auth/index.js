"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authHandler = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const emailService_1 = require("../utils/emailService");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
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
exports.authHandler.post("/verify-otp", async (req, res) => {
    const { email, otp } = req.body;
    if (!email)
        return res.status(400).json({ message: "Email is required" });
    if (!otp)
        return res.status(400).json({ message: "OTP is required" });
    try {
        const existingOtp = await prisma.oTP.findFirst({ where: { email } });
        if (!existingOtp)
            return res.status(400).json({ message: "Invalid email" });
        if (existingOtp.code != otp)
            return res.status(400).json({ message: "Invalid OTP" });
        if (new Date() > existingOtp.expiresAt)
            return res.status(400).json({ message: "OTP has expired" });
        let user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            user = await prisma.user.create({ data: { email } });
        }
        await prisma.oTP.delete({ where: { id: existingOtp.id } });
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "4h" });
        return res.status(200).json({
            message: "OTP verified successfully",
            token,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
});
//# sourceMappingURL=index.js.map