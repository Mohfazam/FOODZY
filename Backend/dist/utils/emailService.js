"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
exports.sendOtpEmail = sendOtpEmail;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.transporter = nodemailer_1.default.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});
async function sendOtpEmail(email, otp) {
    const info = await exports.transporter.sendMail({
        from: `"Foodzy" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Your Foodzy OTP Code",
        text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
    });
    console.log("✅ OTP email sent:", info.messageId);
}
//# sourceMappingURL=emailService.js.map