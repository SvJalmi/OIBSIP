# Pizza Delivery Application - Backend

## Overview
This is the backend for the Pizza Delivery Application, built using Node.js, Express, and MongoDB. The backend handles user authentication, pizza management, order processing, payment integration, and inventory management.

## Features
- User registration and login with email verification
- Admin dashboard for managing inventory and orders
- Custom pizza builder functionality
- Payment processing using Razorpay
- Real-time order status updates

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd pizza-delivery-app/backend
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Configuration
- Create a `.env` file in the backend directory and add your MongoDB connection string and Razorpay API keys:
   ```
   MONGODB_URI=<your_mongodb_uri>
   RAZORPAY_KEY_ID=<your_razorpay_key_id>
   RAZORPAY_SECRET=<your_razorpay_secret>
   ```

## Running the Application
To start the server, run:
```
npm start
```
The server will run on `http://localhost:5000`.

## API Endpoints
- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login a user
  - `GET /api/auth/verify-email` - Verify user email

- **Pizza Management**
  - `GET /api/pizza` - Get all pizzas
  - `POST /api/pizza` - Create a new pizza

- **Order Management**
  - `POST /api/order` - Create a new order
  - `GET /api/order/:id` - Get order status

- **Payment**
  - `POST /api/payment/initiate` - Initiate payment
  - `POST /api/payment/verify` - Verify payment

- **Admin Functions**
  - `GET /api/admin/inventory` - Get inventory details
  - `PUT /api/admin/inventory` - Update inventory
  - `GET /api/admin/orders` - Get all orders

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- Razorpay

## License
This project is licensed under the MIT License.