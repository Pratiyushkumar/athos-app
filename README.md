# Product Search App

A React-based product search interface that fetches results from the **Searchspring API** and displays them in a rich, responsive grid layout.

## 🚀 Features

- **Product Search**: Full-text search to find products from the API.
- **Search Suggestions**: One-click filters for common categories like Hats, Swimsuits, etc.
- **Rich Card Layout**: View product thumbnails, titles, prices, and discounted rates (MSRP comparison).
- **Add to Cart logic**: Visual indicator for items added during the session.
- **Smart Pagination**: Easy navigation for multi-page search results with previous/next controls.
- **Premium Styling**: Responsive layout built with Tailwind CSS and styled with smooth transitions.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## ⚙️ Project Setup

Follow the steps below to run this project on your local machine:

### Prerequisites
Make sure you have **Node.js** and **pnpm** installed. If you don't have `pnpm`, you can install it using npm:
`npm install -g pnpm`

### 1. Install Dependencies
Navigate into the directory and run:

```bash
pnpm install
```

### 2. Run Development Server
Start the development server with Hot Module Replacement (HMR):

```bash
pnpm run dev
```

The application should now be accessible at `http://localhost:5173` (or the port specified in your terminal).

### 3. Build for Production
To build the application for production deployment:

```bash
pnpm run build
```
This akan create a optimized production build in the `dist/` folder.

---

## 🔌 API Details

The application communicates with the Searchspring Search API:
- **Endpoint**: `http://api.searchspring.net/api/search/search.json`
- **Default Site ID**: `scmq7n`
- **Response Format**: Native JSON outputs for products and pagination metrics.

