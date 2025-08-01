const Order = require('../models/Order');
const Inventory = require('../models/Inventory');

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const { userId, pizzaId, paymentInfo } = req.body;
        const newOrder = new Order({ userId, pizzaId, paymentInfo, status: 'Pending' });
        await newOrder.save();
        res.status(201).json({ message: 'Order created successfully', order: newOrder });
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
};

// Get order status
exports.getOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ order });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching order status', error: error.message });
    }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order status updated', order: updatedOrder });
    } catch (error) {
        res.status(500).json({ message: 'Error updating order status', error: error.message });
    }
};