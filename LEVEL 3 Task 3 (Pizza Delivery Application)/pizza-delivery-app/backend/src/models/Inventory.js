const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    pizzaBase: {
        type: Number,
        required: true,
        default: 0
    },
    cheese: {
        type: Number,
        required: true,
        default: 0
    },
    veggies: {
        type: Number,
        required: true,
        default: 0
    },
    meats: {
        type: Number,
        required: true,
        default: 0
    },
    sauces: {
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true });

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;