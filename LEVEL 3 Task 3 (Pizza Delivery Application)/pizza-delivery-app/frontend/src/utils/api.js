import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL based on your backend configuration

// User Authentication
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
};

export const verifyEmail = async (token) => {
    const response = await axios.get(`${API_URL}/auth/verify-email/${token}`);
    return response.data;
};

// Pizza Management
export const getPizzas = async () => {
    const response = await axios.get(`${API_URL}/pizzas`);
    return response.data;
};

export const createPizza = async (pizzaData) => {
    const response = await axios.post(`${API_URL}/pizzas`, pizzaData);
    return response.data;
};

// Order Management
export const createOrder = async (orderData) => {
    const response = await axios.post(`${API_URL}/orders`, orderData);
    return response.data;
};

export const getOrderStatus = async (orderId) => {
    const response = await axios.get(`${API_URL}/orders/${orderId}`);
    return response.data;
};

// Inventory Management (Admin)
export const getInventory = async () => {
    const response = await axios.get(`${API_URL}/admin/inventory`);
    return response.data;
};

export const updateInventory = async (inventoryData) => {
    const response = await axios.put(`${API_URL}/admin/inventory`, inventoryData);
    return response.data;
};

// Payment Integration
export const initiatePayment = async (paymentData) => {
    const response = await axios.post(`${API_URL}/payment/initiate`, paymentData);
    return response.data;
};

export const verifyPayment = async (paymentInfo) => {
    const response = await axios.post(`${API_URL}/payment/verify`, paymentInfo);
    return response.data;
};