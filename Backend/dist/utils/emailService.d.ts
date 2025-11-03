import nodemailer from "nodemailer";
export declare const transporter: nodemailer.Transporter<import("nodemailer/lib/smtp-transport").SentMessageInfo, import("nodemailer/lib/smtp-transport").Options>;
export declare function sendOtpEmail(email: string, otp: string): Promise<void>;
export declare function sendOrderConfirmationEmail(email: string, orderId: string, total: number, products: {
    name: string;
    quantity: number;
    price: number;
}[]): Promise<void>;
//# sourceMappingURL=emailService.d.ts.map