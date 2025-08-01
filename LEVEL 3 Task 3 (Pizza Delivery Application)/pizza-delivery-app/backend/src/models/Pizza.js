const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    base: {
        type: String,
        required: true,
        enum: ['Thin Crust', 'Thick Crust', 'Cheese Burst', 'Stuffed Crust']
    },
    sauce: {
        type: String,
        required: true,
        enum: ['Tomato', 'Barbecue', 'Pesto', 'Alfredo']
    },
    cheese: {
        type: String,
        required: true,
        enum: ['Mozzarella', 'Cheddar', 'Parmesan', 'Vegan']
    },
    toppings: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
}, { timestamps: true });

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;