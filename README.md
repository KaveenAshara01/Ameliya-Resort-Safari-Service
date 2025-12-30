# Premium Tourism Packages Website

A modern, full-stack tourism packages showcasing website with admin panel for package management.

## Features

- **User-Facing Website**
  - Beautiful, modern homepage showcasing tourism packages
  - Package cards with images, titles, descriptions, and prices
  - Contact via WhatsApp and Email
  - Responsive design

- **Admin Panel**
  - Secure authentication
  - Create, edit, and delete packages
  - Image upload functionality
  - Featured package option
  - Dashboard to manage all packages

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens
- **File Upload**: Multer

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)

### Installation

1. **Install dependencies**
   ```bash
   npm run install-all
   ```

2. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Update MongoDB connection string and JWT secret:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/tourism-packages
   JWT_SECRET=your-super-secret-jwt-key
   ```

3. **Create admin account**
   - Make sure MongoDB is running
   - Run: `node server/scripts/createAdmin.js`
   - This creates default admin: username: `admin`, password: `admin123`

4. **Run the application**
   ```bash
   npm run dev
   ```
   This starts both frontend (http://localhost:3000) and backend (http://localhost:5000)

### Usage

- **User Site**: Visit http://localhost:3000
- **Admin Panel**: Visit http://localhost:3000/admin/login
  - Default credentials: admin / admin123 (change after first login)

### Update Contact Information

Edit these files to update WhatsApp number and email:
- `client/src/components/ContactSection.jsx` - Update `whatsappNumber` and `email` variables
- `client/src/components/Footer.jsx` - Update contact information

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   └── App.jsx        # Main app component
├── server/                # Express backend
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── middleware/       # Auth middleware
│   └── uploads/          # Uploaded images
└── package.json          # Root package.json
```

## API Endpoints

- `GET /api/packages` - Get all packages (public)
- `GET /api/packages/:id` - Get single package (public)
- `POST /api/packages` - Create package (admin only)
- `PUT /api/packages/:id` - Update package (admin only)
- `DELETE /api/packages/:id` - Delete package (admin only)
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Admin registration

## License

MIT

