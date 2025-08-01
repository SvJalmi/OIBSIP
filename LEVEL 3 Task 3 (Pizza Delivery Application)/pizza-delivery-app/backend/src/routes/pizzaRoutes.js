const express = require('express');
const { getPizzas, createPizza } = require('../controllers/pizzaController');

const router = express.Router();

// Route to get all pizzas
router.get('/', getPizzas);

// Route to create a new pizza
router.post('/', createPizza);

module.exports = router;