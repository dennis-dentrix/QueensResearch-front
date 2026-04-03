# 📊 GoMeal — Writer & Vendor Portfolio Dashboard

> A comprehensive performance tracking dashboard for the QueensResearch platform — built for writers and vendors to manage workload, monitor earnings, and track output in one unified view.


## 📌 Overview

GoMeal is the frontend application for the QueensResearch platform — a SaaS dashboard designed for academic writers and freelance vendors. It consolidates performance metrics, financial tracking, and workload management into a single, intuitive interface.

This is a real-world client project, designed to replace manual tracking processes and give writers and vendors full visibility into their productivity and earnings.

---

## ✨ Features

- 📈 **Performance Dashboard** — Visual overview of output, completion rates, and productivity trends
- 💰 **Financial Tracking** — Monitor earnings, pending payments, and payout history
- 📋 **Workload Management** — Track active assignments, deadlines, and completion status
- 👤 **User Profile** — Vendor/writer profile with key stats and account details
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile screens
- ⚡ **Fast Load Times** — Vite-powered build with optimized asset delivery

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router v6 |
| HTTP Client | Axios / Fetch API |
| Code Quality | ESLint + Prettier |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- Access to the QueensResearch backend API

### Installation

```bash
# Clone the repository
git clone https://github.com/dennis-dentrix/gomeal-frontend.git
cd gomeal-frontend

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=your_backend_api_url
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Dashboard/
│   ├── Finance/
│   ├── Workload/
│   └── Profile/
├── pages/              # Route-level page components
├── hooks/              # Custom React hooks
├── services/           # API service functions
├── utils/              # Utility/helper functions
└── assets/             # Static assets
```

---

## 🎯 Use Case

This dashboard was built for a freelance platform managing 50+ active writers. Key goals:

- Eliminate manual spreadsheet tracking for writers
- Provide real-time visibility into earnings and assignment status
- Reduce admin overhead for platform coordinators

---

## 📄 License

MIT © [Denis Kyusya](https://github.com/dennis-dentrix)
