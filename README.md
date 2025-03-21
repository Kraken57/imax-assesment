﻿# imax-assesment

# Load Posting System - Frontend

## 🚀 Project Overview

This project is a **Load Posting System** built using **Next.js** as part of a Full Stack Engineering practical test. The platform connects **shippers** and **truckers**, allowing them to post loads, bid on loads, track shipments, and manage financial records.

**Note:** This repository contains only the **frontend** implementation of the project. Backend functionalities such as **user authentication, database integration, and API endpoints** will be implemented later.

## 🛠 Tech Stack

- **Next.js** - React framework for server-side rendering
- **ShadCN** - UI components for styling
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Strongly typed JavaScript
- **Radix UI** - Accessible UI components
- **Lucide-react** - Icon library
- **React Hook Form** - Form validation

## 📜 Features Implemented

✅ **Frontend UI for:**

- **User Authentication (Login & Signup pages)**
- **Post Load** (Shippers can create load postings)
- **Bid on Load** (Truckers can place bids on loads)
- **SuperAdmin Dashboard** (Manage shippers, truckers, and tracking)
- **Load Tracking UI** (Displays tracking status and alerts)
- **Financial Ledger UI** (Overview of transactions for users)
- **Truckers' Benefits Page** (Insurance, Discounts, Claims)

🚧 **Upcoming Backend Features:**

- **Database Integration** (MongoDB via Mongoose)
- **Authentication & Authorization** (JWT + NextAuth.js)
- **Load Bidding & Winner Selection API**
- **Real-time Load Tracking** (WebSockets or MQTT)
- **Financial Management APIs**

## 🏗️ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/load-posting-frontend.git
cd load-posting-frontend
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run the Development Server

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## ⏳ Challenges & Solutions

### **Challenges Faced:**

- **Tailwind CSS Setup Issues:** Fixe*d by reconfig*uring `tailwind.config.js`.
- **ShadCN Component Styling Conflicts:** Resolved by customizing themes.
- **Routing Errors:** Corrected Next.js App Router imports.

## 📌 Status of Implementation

### ✅ Completed

- Frontend UI & Components
- Shipper & Trucker dashboard pages
- SuperAdmin Dashboard UI

### 🚧 Partially Implemented

- Load Bidding UI (No backend logic yet)
- Real-time tracking UI (Needs API integration)

### ❌ Not Yet Implemented

- Backend (Auth, Database, APIs, WebSockets)
- Payment Gateway & Financial Transactions

## 🔗 Future Roadmap

- **Integrate Backend APIs** for full functionality
- **Optimize UI for Mobile & Tablet Devices**
- **Deploy on Vercel** for public access


