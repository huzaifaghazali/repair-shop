# Repair Shop Management System

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-000000?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.41.0-brightgreen?logo=drizzle&logoColor=white)](https://orm.drizzle.team/)
[![Kinde Auth](https://img.shields.io/badge/Kinde_Auth-2.6.1-blueviolet)](https://kinde.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Modern web application for managing repair shop operations, replacing traditional sticky note systems with a digital solution.

## Picture

![rs1](https://github.com/user-attachments/assets/1abff2cb-726f-45bd-a5e5-99440446498a)

![rs1a](https://github.com/user-attachments/assets/6cebd0af-4df1-41ed-80ce-d97853574e0a)

![rs2](https://github.com/user-attachments/assets/d7df163f-74b5-4052-ad9f-7d6fa0011ac6)

![rs3](https://github.com/user-attachments/assets/f8629c28-b2ea-42eb-86ad-4cdf5cc3a0ae)

![rs4](https://github.com/user-attachments/assets/521799fb-6ee3-4988-96ea-1799c4d92f7b)

## Features

### Authentication & Security
- 🔑 Passwordless employee login via Kinde
- 🔐 Role-based access control (Employee, Manager, Admin)
- ⏳ Automatic session expiration (weekly re-authentication)
- 🚫 Immediate access revocation capability
- 👥 User permission management

### Ticket Management
- 🎫 Real-time ticket tracking (OPEN/COMPLETED status)
- 🔍 Advanced search & filtering
- 📅 Created/updated timestamps
- 👤 Assignment tracking (employee-specific tickets)
- 📝 Ticket notes & history

### Customer Management
- 📇 Customer profiles with full contact details
- 🗒️ Customer notes system
- 📍 Address management with geolocation support
- 🔄 Customer-ticket association

### UI/UX
- 🌓 Light/Dark mode toggle
- 📱 Responsive design (Desktop-first, tablet-optimized)
- 🚦 Real-time status indicators
- 📊 Interactive dashboard
- 🧭 Intuitive navigation

### Administration
- 👥 Employee access management
- 📊 System-wide analytics
- 🔄 Bulk operations
- 📤 CSV export capabilities

## Getting Started

### Prerequisites
- Node.js v18+
- PostgreSQL database
- Kinde account for authentication

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/huzaifaghazali/repair-shop.git
    cd repair-shop
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Environment Variables
- Create a `.env.local` file in the root of the project and add the necessary environment variables.
    ```bash
    KINDE_CLIENT_ID= <your own value>
    KINDE_CLIENT_SECRET= <your own value>
    KINDE_ISSUER_URL= <your own value>
    KINDE_SITE_URL= <your own value>
    KINDE_POST_LOGOUT_REDIRECT_URL= <your own value>
    KINDE_POST_LOGIN_REDIRECT_URL= <your own value>
    KINDE_DOMAIN= <your own value>
    KINDE_MANAGEMENT_CLIENT_ID= <your own value>
    KINDE_MANAGEMENT_CLIENT_SECRET= <your own value>
    DATABASE_URL= <your own value>
    ```

### Database Setup
1. **Generate Migrations (if you make schema changes):**
Ensure your `DATABASE_URL` is set in .env.local.

    ```bash
    npm run db:generate
    ```
2. **Apply Migrations:**
    ```bash
    npm run db:migrate
    ```
### Running the Application
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open http://localhost:3000 with your browser to see the application.
