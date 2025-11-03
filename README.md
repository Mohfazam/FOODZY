# FOODZY

## Road Map

- [x] **Day 0 (Nov 2):** Project structure setup, backend & frontend initialization, Prisma schema design, GitHub repo setup  
- [x] **Day 1 (Nov 3):** Complete backend — OTP auth, products, categories, orders, reviews, email confirmation setup, Postman testing, deployment  
- [ ] **Day 2 (Nov 4):** Frontend development — product listing, product details page, cart management with Zustand, checkout flow integration with backend  
- [ ] **Day 3 (Nov 5):** Final touches — pixel-perfect UI (match Figma), OTP verification flow on frontend, code cleanup, deployment (frontend), and detailed README.md  

  
## Backend

### 3. Features & Endpoints

**🧍‍♂️ Auth (Email + OTP)**

- [ ] `POST /api/auth/send-otp` → generate & send OTP via email
- [ ] `POST /api/auth/verify-otp` → verify OTP, create/login user

**🛒 Products**
- [ ] `GET /api/products` → get all products
- [ ] `GET /api/products/:id` → get single product

**📦 Orders**

- [ ] `POST /api/orders` → create new order (store in DB)
- [ ] `GET /api/orders/:userId` → fetch user's orders
- [ ] After successful order → send order details to user email

### 4. Services

- [ ] Email Service — handles OTP & order confirmation emails
- [ ] OTP Service — generates, stores, and verifies OTPs
- [ ] Order Service — calculates total, stores order + items

## API Endpoints Documentation

## 🚀 POST Routes

| Endpoint | Category | Description |
|----------|----------|-------------|
| `/api/auth/send-otp` | Auth | Generate and send OTP to user's email |
| `/api/auth/verify-otp` | Auth | Verify OTP and log in or register user |
| `/api/orders` | Orders | Place a new order (creates Order + OrderItems) |
| `/api/email/order-confirmation` | Email (optional) | Send order confirmation email manually (for testing) |

## 📦 GET Routes

| Endpoint | Category | Description |
|----------|----------|-------------|
| `/api/health` | System | Check if backend is running |
| `/api/auth/me` | Auth | Get logged-in user details |
| `/api/products` | Products | Fetch all products |
| `/api/products/:id` | Products | Fetch a single product by ID |
| `/api/orders` | Orders | Fetch all orders of the logged-in user |
| `/api/orders/:id` | Orders | Fetch details of a specific order |


### TODO

- [] **Hero Newsletter:** In the hero section the user should be able to enter their email address then an email for confirmation should be sent saying "your subscribed to the newsletter"  