# GadgetShop

GadgetShop is an e-commerce platform for purchasing electronic gadgets, including phones, laptops, iPads, and watches. Built with a modern tech stack, it features a React frontend for a dynamic user interface, a Node.js/Express backend for robust API services, and MongoDB for data storage. The platform supports user authentication, cart management, product browsing, and admin functionalities for managing inventory.

---

## Table of Contents
1. [Project Description](#project-description)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Usage](#usage)
7. [API Endpoints](#api-endpoints)
8. [Troubleshooting](#troubleshooting)
9. [Deployment](#deployment)


---

## Project Description

GadgetShop is an e-commerce platform for purchasing electronic gadgets, including phones, laptops, iPads, and watches. It features a React frontend, Node.js/Express backend, and MongoDB for data storage. The platform allows users to browse products, manage their cart, and securely authenticate via JWT.

---

## Features

### User Features:
- Browse products by category (Phones, Laptops, iPads, Watches) on the homepage.
- View detailed product pages with specifications (weight, height, battery, capacity, price).
- Add products to a cart, update quantities, and remove items.
- Secure user authentication (login/register) with JWT.
- Responsive design using Bootstrap for mobile and desktop compatibility.

### Admin Features:
- Admin panel to add, update, or delete products.
- Protected routes to ensure only authorized admins can manage inventory.

---

## Tech Stack

### Frontend:
- React (with React Router for navigation)
- Vite (development server and build tool)
- Bootstrap (styling)

### Backend:
- Node.js with Express.js
- MongoDB (via Mongoose)
- JWT for authentication

### Database:
- MongoDB Atlas (cloud-hosted)

### Tools:
- dotenv (environment variables)
- bcryptjs (password hashing)
- jsonwebtoken (JWT authentication)

---

## Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB instance
- Git
- Browser (Chrome/Firefox recommended)

---

## Installation

### Clone the Repository:
## FOR FRONTEND
```bash
git clone https://github.com/EMMANUEL08161823021/phoneshoppingcart.github.io
cd PhoneShoppingCart
cd frontend
npm run dev

---

## BACKEND
```bash
git clone https://github.com/EMMANUEL08161823021/phoneshoppingcart.github.io
cd PhoneShoppingCart
cd backend
npm start
