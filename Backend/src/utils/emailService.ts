
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendOtpEmail(email: string, otp: string) {
  const info = await transporter.sendMail({
    from: `"Foodzy" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Your Foodzy OTP Code",
    text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
  });

  console.log("✅ OTP email sent:", info.messageId);
}
