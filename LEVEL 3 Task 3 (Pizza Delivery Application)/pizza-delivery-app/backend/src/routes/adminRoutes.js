const express = require('express');
const { getInventory, updateInventory, getOrders } = require('../controllers/adminController');
const { isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/inventory', isAdmin, getInventory);
router.put('/inventory', isAdmin, updateInventory);
router.get('/orders', isAdmin, getOrders);

module.exports = router;