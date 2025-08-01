# Pizza Delivery Application

This is a full-stack pizza delivery application built using React for the frontend, Node.js for the backend, and MongoDB for the database. The application includes features for both users and administrators, providing a seamless experience for ordering pizzas and managing inventory.

## Features

### User Features
- **User Registration and Login**: Users can create an account and log in to the application.
- **Email Verification**: Users receive a verification email upon registration to confirm their email address.
- **Pizza Varieties**: Users can view a list of available pizza varieties.
- **Custom Pizza Builder**: Users can create their own custom pizzas by selecting bases, sauces, cheeses, and toppings.
- **Order Status Updates**: Users can track the status of their orders in real-time.
- **Payment Integration**: Users can make payments using Razorpay.

### Admin Features
- **Admin Login**: Admins can log in to manage the application.
- **Inventory Management**: Admins can view and update the inventory of ingredients.
- **Order Management**: Admins can view and manage all orders placed by users.

## Technologies Used
- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Payment Gateway**: Razorpay

## Installation

### Prerequisites
- Node.js
- MongoDB

### Backend Setup
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your MongoDB connection in `backend/src/config/db.js`.
4. Start the server:
   ```
   npm start
   ```

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## Usage
- Access the application in your browser at `http://localhost:3000`.
- Users can register, log in, and start ordering pizzas.
- Admins can log in to manage inventory and orders.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.