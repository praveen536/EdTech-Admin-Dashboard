
# 📘 EdTech Admin Dashboard – Full Stack App

## 🚀 Overview
This project is an **EdTech Admin Dashboard** built to manage courses in a learning platform.  
It demonstrates **secure authentication**, **role-based authorization**, and **full CRUD operations** using a modern full-stack architecture.

The application is designed with **scalability, security, and maintainability** in mind.

---

## 🛠 Tech Stack

### Frontend
- Next.js 15 (App Router)
- React 18
- Tailwind CSS
- Server Components & Server Actions

### Backend
- NextAuth.js (Credentials Provider)
- Prisma ORM
- PostgreSQL

### Authentication & Security
- JWT-based sessions
- Password hashing with bcrypt
- Role-based access control (ADMIN)

---

## ✨ Features

### 🔐 Authentication
- Email & password login
- Secure password hashing
- JWT session strategy
- Protected routes using server-side session checks

### 🧑‍💼 Admin Dashboard
- Admin-only access
- Sidebar navigation
- Secure server-rendered pages

### 📚 Course Management
- Create courses
- View course list
- Delete courses
- Course pricing support
- Draft / Published status
- Instructor relationship enforced at DB level

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   └── courses/route.ts
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   └── courses/
│   │       ├── page.tsx
│   │       └── actions.ts
│   └── login/page.tsx
│
├── lib/
│   ├── auth.ts
│   ├── prisma.ts
│   └── admin.ts
│
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
│
└── types/
    └── next-auth.d.ts
```

---

## 🔐 Authentication Design
- Credentials-based login using NextAuth
- Password validation with bcrypt
- Role injected into JWT and session
- Admin-only route protection using `getServerSession`

---

## 🧠 Database Design

### User
- id
- email
- password (hashed)
- role (ADMIN / USER)
- courses (relation)

### Course
- id
- title
- description
- price
- status (DRAFT / PUBLISHED)
- instructorId (relation)
- createdAt

---

## 🔄 Server Actions
The project uses **Next.js Server Actions** instead of traditional REST APIs for form submissions, improving security and reducing boilerplate.

---

## 🧪 Setup Instructions

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Environment Variables
Create `.env`:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/edtech
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000
```

### 3️⃣ Prisma Setup
```bash
npx prisma migrate reset
npx prisma generate
npx prisma db seed
```

### 4️⃣ Run Project
```bash
npm run dev
```

---

## 🔑 Admin Login

```
Email: admin@edtech.com
Password: admin123
```

---

## 🎯 Key Engineering Decisions
- Prisma ORM for type-safe database access
- Role-based authorization enforced server-side
- Schema-first database design
- Server Actions for secure mutations

---

## 🚀 Future Improvements
- Edit course functionality
- Instructor management
- Student enrollment
- Pagination & search
- Deployment

---

## ✅ Conclusion
This project demonstrates **real-world full-stack development**, secure authentication, and clean architecture suitable for production-level applications.
