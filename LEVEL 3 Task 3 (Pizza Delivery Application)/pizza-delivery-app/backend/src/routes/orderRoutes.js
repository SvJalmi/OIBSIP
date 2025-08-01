const express = require('express');
const { createOrder, getOrderStatus, updateOrderStatus } = require('../controllers/orderController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, createOrder);
router.get('/status/:orderId', authMiddleware, getOrderStatus);
router.put('/update/:orderId', authMiddleware, updateOrderStatus);

module.exports = router;