const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    pizzaId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Pizza'
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    paymentInfo: {
        type: Object,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;