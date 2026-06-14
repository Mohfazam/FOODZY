#  FOODZY — Full Stack E-Commerce Platform

- **Frontend:** [https://foodzy-delta.vercel.app](https://foodzy-delta.vercel.app)
- **Backend:** [https://foodzybackend.vercel.app](https://foodzybackend.vercel.app)

## 🧭 Overview

FOODZY is a full-stack e-commerce web application developed as part of the Cognito Innovations assignment.
It enables users to authenticate via OTP (email-based), browse food products, manage a shopping cart, and place orders with automated email confirmations.

Both the frontend and backend are fully developed, typed with TypeScript, and deployed on production servers.

---

## 🎯 Objective

To design and implement a scalable, maintainable, and pixel-perfect e-commerce platform using the prescribed technology stack and coding standards, while adhering strictly to the given evaluation criteria.

---

## 🧰 Technology Stack

### 🖥️ Frontend

* **Framework:** Next.js 16 (TypeScript)
* **Language:** TypeScript
* **UI Styling:** TailwindCSS
* **State Management:** Zustand
* **Data Fetching:** Axios + React Query
* **Icons:** Lucide React

### ⚙️ Backend

* **Runtime:** Node.js (TypeScript)
* **Framework:** Express.js
* **ORM:** Prisma
* **Database:** PostgreSQL / MongoDB
* **Email Service:** Nodemailer (for OTP & order confirmations)
* **Authentication:** OTP-based login
* **Deployment:** vercel

---

## ✨ Features

### 🔐 Authentication

* Email-based OTP verification
* Automatic user creation on first login
* Token-based session management

### 🛒 Products

* Fetch all products
* View product details by ID

### 📦 Cart and Orders

* Add, remove, and manage items in cart (Zustand store)
* Checkout integrated with backend
* Order confirmation email sent automatically

### 🌐 Additional Features

* Responsive layout (desktop and mobile)
* Backend health check endpoint
* Environment-based configuration

---

## 📁 Folder Structure

### 🧩 Frontend (Next.js 14 + TypeScript)

```
frontend/
├── .next/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   ├── checkout/
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── icon.png
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── Components/
│   │   ├── BestSellsCard.tsx
│   │   ├── CartModal.tsx
│   │   ├── CategoryCard.tsx
│   │   ├── CategoryGrid.tsx
│   │   ├── DailyBestSales.tsx
│   │   ├── DealOfTheDay.tsx
│   │   ├── DealsOfTheDayCard.tsx
│   │   ├── Delivery.tsx
│   │   ├── FloatingCartButton.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── PopularProducts.tsx
│   │   ├── ProductCard.tsx
│   │   └── ProductsWrapper.tsx
│   ├── Context/
│   │   └── Provider.tsx
│   ├── lib/
│   │   ├── api.ts
│   │   └── config.ts
│   └── Store/
│       ├── Store.ts
│       └── tsconfig.ts
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── README.md
```

---

### ⚙️ Backend (Node.js + Express + Prisma + TypeScript)

```
backend/
├── .vercel/
├── dist/
├── node_modules/
├── prisma/
├── src/
│   ├── Auth/
│   ├── Feedback/
│   ├── middleware/
│   ├── Order/
│   ├── Products/
│   ├── utils/
│   └── index.ts
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── tsconfig.json
├── tsconfig.tsbuildinfo
└── vercel.json
```

---

## 🧩 API Endpoints

### 🔐 Authentication

| Method | Endpoint               | Description                      |
| ------ | ---------------------- | -------------------------------- |
| POST   | `/api/auth/send-otp`   | Generate and send OTP via email  |
| POST   | `/api/auth/verify-otp` | Verify OTP and authenticate user |
| GET    | `/api/auth/me`         | Get logged-in user details       |

### 🛍️ Products

| Method | Endpoint            | Description                     |
| ------ | ------------------- | ------------------------------- |
| GET    | `/api/products`     | Retrieve all products           |
| GET    | `/api/products/:id` | Retrieve single product details |

### 📦 Orders

| Method | Endpoint                        | Description                                      |
| ------ | ------------------------------- | ------------------------------------------------ |
| POST   | `/api/orders`                   | Create a new order                               |
| GET    | `/api/orders/:userId`           | Fetch orders for a user                          |
| POST   | `/api/email/order-confirmation` | Send order confirmation email (testing endpoint) |

### ⚙️ System

| Method | Endpoint      | Description           |
| ------ | ------------- | --------------------- |
| GET    | `/api/health` | Verify backend status |

---

## ⚡ Environment Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/<your-username>/foodzy.git
cd foodzy
```

### 2️⃣ Install Dependencies

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 3️⃣ Configure Environment Variables

#### 🗂️ Backend `.env`

```bash
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

#### 🗂️ Frontend `.env.local`

```bash
NEXT_PUBLIC_API_BASE_URL=https://your-backend-domain.com
```

### 4️⃣ Run Project Locally

```bash
# Backend
npm run dev

# Frontend
npm run dev
```

---

## 🌍 Deployment Links

| Component             | Platform         | URL                                                                      |
| --------------------- | ---------------- | ------------------------------------------------------------------------ |
| **Frontend**          | Vercel           | [https://foodzy.vercel.app](https://foodzy.vercel.app)                   |
| **Backend**           | Render / Railway | [https://foodzy-api.onrender.com](https://foodzy-api.onrender.com)       |
| **GitHub Repository** | GitHub           | [https://github.com/Mohfazam/FOODZY](https://github.com/Mohfazam/FOODZY) |

---

## 📜 License

This project is licensed under the **MIT License**.
It is intended solely for **evaluation and educational purposes**.

---

Would you like me to make this visually enhanced with emojis and section dividers (for a modern GitHub look) — or keep it clean and professional like this version?






