# Yeka MKC Church Website

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/Chapa-FFB703?style=for-the-badge" alt="Chapa"/>
</p>

<p align="center">
  <strong>A modern digital platform for Yeka MKC Church</strong>
</p>

<p align="center">
  Providing church information, directions, community resources, and a secure platform for supporting the church building project.
</p>

---

## 📖 About the Project

The **Yeka MKC Church Website** is a modern web platform developed for a local church community in Addis Ababa, Ethiopia.

The platform serves as the church's digital presence, making it easier for visitors, members, and supporters to discover information about the church, find its location, learn about services and activities, and contribute financially to the church's building project.

The project is designed with a focus on **simplicity, accessibility, responsiveness, security, and maintainability**, following modern web development practices suitable for a real-world production application.

---

## ✨ Key Features

### 🏠 Church Information

* Church introduction and mission
* About the church
* Service information
* Church activities and announcements
* Contact information
* Frequently asked questions

### 📍 Location & Directions

* Church location information
* Direction guidance for visitors
* Easy access to the church's physical location

### 💰 Church Giving & Fundraising

The website provides an online giving platform that allows supporters to contribute toward the church's building project.

Features include:

* Donation amount selection
* Custom donation amounts
* Donor information collection
* Donation purpose selection
* Secure payment initialization
* Chapa payment integration
* Payment status tracking
* Payment callback handling
* Donation records stored in PostgreSQL

### 📱 Responsive Design

The website is designed to work across:

* Desktop computers
* Laptops
* Tablets
* Mobile devices

The UI follows a clean and modern visual style while maintaining a formal appearance appropriate for a church organization.

---

## 🛠️ Tech Stack

### Frontend

<p>
  <img src="https://skillicons.dev/icons?i=ts,react,tailwind" alt="Frontend Technologies"/>
</p>

| Technology       | Purpose                           |
| ---------------- | --------------------------------- |
| **TypeScript**   | Type-safe application development |
| **React**        | Frontend UI development           |
| **Tailwind CSS** | Responsive styling and UI design  |

### Backend & Database

<p>
  <img src="https://skillicons.dev/icons?i=nodejs,express,postgres,supabase" alt="Backend Technologies"/>
</p>

| Technology     | Purpose                                      |
| -------------- | -------------------------------------------- |
| **Node.js**    | Backend runtime                              |
| **Express.js** | REST API development                         |
| **PostgreSQL** | Relational database                          |
| **Supabase**   | Database infrastructure and backend services |

### Payment

<p align="left">
  <img src="https://img.shields.io/badge/Chapa-Payment_Gateway-FFB703?style=for-the-badge" alt="Chapa"/>
</p>

**Chapa** is used to process online donations and provide a secure payment experience for supporters.

---

## 🏗️ Application Architecture

The application follows a client-server architecture:

```text
┌───────────────────────────┐
│        React Client       │
│     TypeScript + TSX      │
│        Tailwind CSS       │
└─────────────┬─────────────┘
              │
              │ REST API
              ▼
┌───────────────────────────┐
│       Express Server      │
│          Node.js          │
└───────┬───────────┬───────┘
        │           │
        │           │ Payment API
        ▼           ▼
┌──────────────┐  ┌──────────────┐
│  Supabase /  │  │    Chapa     │
│ PostgreSQL   │  │ Payment API  │
└──────────────┘  └──────────────┘
```

### Donation Flow

```text
Donor
  │
  ▼
Donation Form
  │
  ▼
Backend API
  │
  ├──────────────► PostgreSQL
  │                 │
  │                 └── Store donation as Pending
  │
  ▼
Chapa API
  │
  ▼
Chapa Checkout
  │
  ▼
Payment Completed
  │
  ▼
Chapa Callback
  │
  ▼
Backend Verification
  │
  ▼
Update Donation Status
```

This ensures that donation records can be tracked throughout the payment lifecycle.

---

## 📂 Project Structure

A simplified project structure:

```text
Yeka-MKC/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── services/
│   │   ├── types/
│   │   └── App.tsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── types/
│   │   └── server.ts
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git
* PostgreSQL / Supabase project
* Chapa account

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/yeka-mkc.git

cd yeka-mkc
```

---

### 2. Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd ../server
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=8989

SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_supabase_service_key

DATABASE_URL=your_postgresql_connection_string

CHAPA_SECRET_KEY=your_chapa_secret_key

FRONTEND_URL=http://localhost:5173
```

For the frontend, create:

```env
VITE_API_URL=http://localhost:8989/api
```

> **Important:** Never commit `.env` files or secret API keys to GitHub.

---

## 💳 Chapa Payment Integration

The website integrates **Chapa** to handle online donations.

The payment process follows this general flow:

1. Donor opens the donation page.
2. Donor enters their information.
3. Donation amount and purpose are submitted.
4. Backend creates a unique transaction reference.
5. Donation is stored in the database as `pending`.
6. Backend initializes the transaction with Chapa.
7. Donor is redirected to Chapa's secure checkout page.
8. Chapa processes the payment.
9. Chapa sends the callback to the backend.
10. The backend processes the payment result.
11. Donation status is updated in PostgreSQL.

Example transaction reference:

```text
church-donation-<unique-id>
```

---

## 🗄️ Database

The application uses **PostgreSQL** through **Supabase**.

The donation system stores information such as:

```text
donor_name
donor_phone_number
amount
currency
donation_purpose
tx_ref
status
created_at
```

Typical donation statuses include:

```text
pending
completed
failed
```

The database provides persistent storage for donation records and enables the church to keep track of contributions.

---

## 🔒 Security Considerations

Security is an important part of the application, especially because the platform handles payment-related information.

The application follows practices such as:

* Environment variables for sensitive credentials
* Server-side payment initialization
* Unique transaction references
* Backend payment callbacks
* Database validation
* CORS configuration
* No exposure of secret API keys to the frontend
* Server-side handling of Chapa credentials

> Payment credentials and Supabase service keys should never be exposed in client-side code or committed to the repository.

---

## 🌐 Deployment

The application can be deployed using modern cloud platforms.

### Frontend

Recommended:

* Vercel

### Backend

Recommended:

* Render

### Database

* Supabase PostgreSQL

### Payment

* Chapa

Example production architecture:

```text
                 Internet
                    │
                    ▼
             ┌─────────────┐
             │   Vercel    │
             │   Frontend  │
             └──────┬──────┘
                    │
                    ▼
             ┌─────────────┐
             │   Render    │
             │   Backend   │
             └──────┬──────┘
                    │
             ┌──────┴───────┐
             ▼              ▼
       ┌───────────┐   ┌───────────┐
       │ Supabase  │   │   Chapa   │
       │ PostgreSQL│   │ Payments  │
       └───────────┘   └───────────┘
```

---

## 🎯 Project Goals

The project aims to:

* Establish a professional digital presence for Yeka MKC Church
* Make church information easily accessible
* Help visitors find the church
* Provide convenient access to church services and activities
* Enable supporters to contribute to the church building project
* Provide a reliable digital foundation for future church services

---

## 🔮 Future Improvements

Potential future features include:

* Online sermon library
* Event management
* Church announcements
* Admin dashboard
* Donation analytics
* Donation receipts
* Email notifications
* SMS notifications
* Online prayer request system
* Member registration
* Church media gallery
* Volunteer management
* Multi-language support
* Improved donation reporting

---

## 🤝 Contributing

Contributions and suggestions are welcome.

If you would like to contribute:

```bash
git checkout -b feature/your-feature
```

Make your changes, commit them, and open a pull request.

```bash
git add .
git commit -m "Add your feature"
git push origin feature/your-feature
```

---

## 📄 License

This project is developed for **Yeka MKC Church**.

Unless otherwise stated, the source code, branding, images, and other church-specific materials are intended for use by the project and organization.

---

## 🙏 Acknowledgements

Special thanks to the technologies and services that make this project possible:


* [Chapa](https://chapa.co/)

---

<p align="center">
  Built with ❤️ for <strong>Yeka MKC Church</strong>
</p>

<p align="center">
  <sub>Connecting the church with its community through technology.</sub>
</p>
