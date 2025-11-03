
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
export async function sendOrderConfirmationEmail(
  email: string,
  orderId: string,
  total: number,
  products: { name: string; quantity: number; price: number }[]
) {
  const productRows = products
    .map(
      (p) => `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">${p.name}</td>
          <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${p.quantity}</td>
          <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">₹${p.price.toFixed(
            2
          )}</td>
        </tr>
      `
    )
    .join("");

  const info = await transporter.sendMail({
    from: `"Foodzy 🍔" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Order Confirmation – Foodzy 🍽️",
    text: `Hi there! Your order (ID: ${orderId}) has been placed successfully. Total: ₹${total}. Thank you for ordering with Foodzy!`,
    html: `
      <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 10px; overflow: hidden;">
        <div style="background-color: #ff6b35; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">🍽️ Foodzy</h1>
          <p style="margin: 0; font-size: 16px;">Your order has been confirmed!</p>
        </div>

        <div style="padding: 24px;">
          <h2 style="color: #333;">Order Summary</h2>
          <p style="font-size: 15px; color: #555;">Hello 👋,</p>
          <p style="font-size: 15px; color: #555;">
            Your order has been successfully placed. Here are the details:
          </p>

          <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600;">Order ID:</td>
              <td style="padding: 8px 0;">${orderId}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600;">Total Amount:</td>
              <td style="padding: 8px 0;">₹${total.toFixed(2)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600;">Status:</td>
              <td style="padding: 8px 0; color: #27ae60;">✅ Confirmed</td>
            </tr>
          </table>

          <h3 style="margin-top: 30px; color: #333;">Ordered Items</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <thead>
              <tr style="background-color: #f8f8f8;">
                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Product</th>
                <th style="padding: 8px; border: 1px solid #ddd; text-align: center;">Qty</th>
                <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${productRows}
            </tbody>
          </table>

          <p style="margin-top: 20px; font-size: 15px; color: #555;">
            Thank you for choosing Foodzy. We appreciate your order and will ensure timely delivery.
          </p>

          <a href="#" style="display: inline-block; margin-top: 20px; background-color: #ff6b35; color: white; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: bold;">
            View Order
          </a>
        </div>

        <div style="background-color: #f8f8f8; padding: 15px; text-align: center; color: #888; font-size: 13px;">
          <p style="margin: 0;">© ${new Date().getFullYear()} Foodzy. All rights reserved.</p>
        </div>
      </div>
    `,
  });

  console.log("✅ Order confirmation email sent:", info.messageId);
}


