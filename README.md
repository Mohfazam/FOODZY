# FOODZY

## Road Map

    - Day 0 (Nov 2): Basic structure setup, backend & frontend init, Prisma schema, GitHub repo setup
    - Day 1 (Nov 3): Backend APIs (products, OTP auth), email setup, frontend product list & cart
    - Day 2 (Nov 4): Checkout flow, order creation, email confirmation, OTP verification integration
    - Day 3 (Nov 5): UI polish (Figma match), code cleanup, deployment (frontend + backend), README.md
  
## Backend

    2. Database (Prisma Models)

User

id, name, email, createdAt

OTP

id, email, code, expiresAt

Product

id, name, description, price, imageUrl, stock

Order

id, userId, totalAmount, createdAt

OrderItem

id, orderId, productId, quantity, price

3. Features & Endpoints
🧍‍♂️ Auth (Email + OTP)

POST /api/auth/send-otp → generate & send OTP via email

POST /api/auth/verify-otp → verify OTP, create/login user

🛒 Products

GET /api/products → get all products

GET /api/products/:id → get single product

📦 Orders

POST /api/orders → create new order (store in DB)

GET /api/orders/:userId → fetch user’s orders

After successful order → send order details to user email

4. Services

Email Service — handles OTP & order confirmation emails

OTP Service — generates, stores, and verifies OTPs

Order Service — calculates total, stores order + items
