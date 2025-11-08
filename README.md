
# 🍔 FOODZY

> A full-stack food ordering platform built with modern tech — OTP-based authentication, smooth checkout flow, email notifications, and a pixel-perfect UI.

---

## 🗺️ Roadmap

| Day | Date | Progress |
|-----|------|-----------|
| **Day 0** | Nov 2 | 🏗️ Project structure setup, backend & frontend initialization, Prisma schema design, GitHub repo setup |
| **Day 1** | Nov 3 | ⚙️ Backend completed — OTP auth, products, categories, orders, reviews, email confirmation setup, Postman testing, deployment |
| **Day 2** | Nov 4 | 💻 Frontend — product listing, product details page, cart management (Zustand), checkout flow integration |
| **Day 3** | Nov 5 | 🎨 Final touches — Figma-perfect UI, OTP flow on frontend, cleanup, frontend deployment, and this detailed README.md |

---

## ⚙️ Tech Stack

### 🧠 Backend
- **Node.js + Express.js**
- **Prisma ORM**
- **PostgreSQL / MongoDB**
- **Nodemailer** for emails (OTP + order confirmations)
- **Deployed on:** Render / Railway / Vercel Serverless

### 💅 Frontend
- **React + Vite**
- **TailwindCSS**
- **Zustand** for state management
- **Axios** for API integration
- **Deployed on:** Vercel

---

## 🔑 Backend Features & API Endpoints

### 🧍‍♂️ Auth (Email + OTP)
| Method | Endpoint | Description |
|--------|-----------|-------------|
| `POST` | `/api/auth/send-otp` | Generate & send OTP via email |
| `POST` | `/api/auth/verify-otp` | Verify OTP, create or log in user |

---

### 🛒 Products
| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/products` | Get all products |
| `GET` | `/api/products/:id` | Get single product details |

---

### 📦 Orders
| Method | Endpoint | Description |
|--------|-----------|-------------|
| `POST` | `/api/orders` | Create a new order (store in DB) |
| `GET` | `/api/orders/:userId` | Fetch user’s order history |
| `POST` | `/api/email/order-confirmation` | (Optional) Send order confirmation email manually (testing) |

> ✅ After successful order → Email confirmation is automatically sent to the user.

---

### 🧩 Supporting Services
| Service | Description |
|----------|-------------|
| **Email Service** | Handles OTP and order confirmation emails |
| **OTP Service** | Generates, stores, and verifies OTPs securely |
| **Order Service** | Calculates total, stores order & order items |

---

## 📘 API Documentation Overview

| Category | Endpoint | Method | Description |
|-----------|-----------|--------|-------------|
| **System** | `/api/health` | GET | Check backend health |
| **Auth** | `/api/auth/me` | GET | Get logged-in user details |
| **Auth** | `/api/auth/send-otp` | POST | Send OTP via email |
| **Auth** | `/api/auth/verify-otp` | POST | Verify OTP and authenticate user |
| **Products** | `/api/products` | GET | Get all products |
| **Products** | `/api/products/:id` | GET | Get product by ID |
| **Orders** | `/api/orders` | GET | Get all orders (user-specific) |
| **Orders** | `/api/orders/:id` | GET | Get specific order details |
| **Orders** | `/api/orders` | POST | Create new order |

---

## 🧠 Frontend Overview

- **Authentication Flow:** Email-based OTP verification connected with backend  
- **Product Pages:** Dynamic product listing + single product detail view  
- **Cart System:** Managed using **Zustand** for lightweight state management  
- **Checkout Flow:** Integrated with backend order APIs  
- **Email Confirmation:** User receives confirmation after order placement  
- **UI:** Built to match Figma design with TailwindCSS responsiveness  

---

## 🚀 Deployment

- **Backend:** Hosted on Render/Railway with environment variables for DB, SMTP, and JWT  
- **Frontend:** Hosted on Vercel  
- **Database:** PostgreSQL / MongoDB via Prisma ORM  

---

## 🧾 TODOs

- [ ] **Hero Newsletter:**  
  - Add email input field in hero section  
  - On submission → Send confirmation email saying  
    _“You’re subscribed to the FOODZY newsletter!”_
- [ ] Integrate reviews & ratings system  
- [ ] Add product search & filter functionality  
- [ ] Improve email templates (OTP + Order confirmation)

---

## 🧑‍💻 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/foodzy.git
cd foodzy
````

### 2️⃣ Setup Environment Variables

Create a `.env` file in both **backend** and **frontend** folders.

#### Example `.env` (Backend)

```bash
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### 3️⃣ Install Dependencies

```bash
# backend
cd backend
npm install

# frontend
cd ../frontend
npm install
```

### 4️⃣ Run the Project

```bash
# backend
npm run dev

# frontend
npm run dev
```

---

## 💡 Inspiration

> "Good food is not just a craving — it’s an experience. FOODZY delivers that experience, from OTP login to order confirmation."

---

## 🧑‍🏭 Contributors

| Name      | Role                                                |
| --------- | --------------------------------------------------- |
| **Amaan** | Developer / Designer / Backend & Frontend Architect |

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use and build upon it.

---

⭐ **Star this repo** if you like it — it helps the project grow!

```

---

Want me to tailor this README with **your actual tech stack (MongoDB or PostgreSQL)**, **deployment platforms (Render/Vercel/etc.)**, and **your real GitHub repo link + logo banner** so it looks like a finished open-source README?
```
