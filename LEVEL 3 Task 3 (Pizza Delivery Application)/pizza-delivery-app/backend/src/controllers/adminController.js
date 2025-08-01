const Inventory = require('../models/Inventory');
const Order = require('../models/Order');

exports.getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.find();
        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching inventory', error });
    }
};

exports.updateInventory = async (req, res) => {
    const { id, updates } = req.body;
    try {
        const updatedInventory = await Inventory.findByIdAndUpdate(id, updates, { new: true });
        res.status(200).json(updatedInventory);
    } catch (error) {
        res.status(500).json({ message: 'Error updating inventory', error });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('userId pizzaId');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
};