import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { sendOtpEmail } from "../utils/emailService";
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const prisma = new PrismaClient();

export const authHandler = Router();

authHandler.get("/health", (req, res) => {
    return res.status(200).json({
        Message: "Auth route up and running"
    });
});

authHandler.post("/request-otp", async (req, res) => {
    const email = req.body.email;

    if (!email) return res.status(400).json({ message: "Email is required" });

    try{
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

        await sendOtpEmail(email, otpCode);

        return res.json({ message: "OTP sent successfully" });
    } catch(error){
        console.error("Error sending OTP:", error);
    return res.status(500).json({ message: "Internal server error" });
    }
});

authHandler.post("/verify-otp", async (req, res) => {
    const {email, otp} = req.body;

    if(!email) return res.status(400).json({ message: "Email is required" });
    if(!otp) return res.status(400).json({ message: "otp is required" });

    try{
        const existingOtp = await prisma.oTP.findFirst({ where: { email } });

        if (!existingOtp) {
        return res.status(400).json({ message: "Invalid email" });
        }

        if (existingOtp.code != otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }


        if (new Date() > existingOtp.expiresAt) {
            return res.status(400).json({ message: "OTP has expired" });
        }

        const token = jwt.sign({email}, JWT_SECRET!, {expiresIn: "4h"});
        
        await prisma.oTP.delete({ where: { id: existingOtp.id } });
        return res.status(200).json({ message: "OTP verified successfully", token });


    } catch(error){
        
        return res.status(500).json({ message: "Something went wrong" });
    }
});