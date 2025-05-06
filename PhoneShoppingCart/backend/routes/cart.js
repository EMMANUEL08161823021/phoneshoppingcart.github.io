const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const auth = require('../middleware/auth');

// Get user's cart
router.get('/', auth, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.userId }).populate('items.productId');
        if (!cart) {
            return res.json({ items: [] });
        }
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add or update item in cart
router.put('/:productId', auth, async (req, res) => {
    try {
        const { quantity } = req.body;
        if (quantity < 1) {
            return res.status(400).json({ message: 'Quantity must be at least 1' });
        }

        const product = await Product.findById(req.params.productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        let cart = await Cart.findOne({ userId: req.user.userId });
        if (!cart) {
            cart = new Cart({ userId: req.user.userId, items: [] });
        }

        const itemIndex = cart.items.findIndex(item => item.productId.toString() === req.params.productId);
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity = quantity;
        } else {
            cart.items.push({ productId: req.params.productId, quantity });
        }

        await cart.save();
        await cart.populate('items.productId');
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Remove item from cart
router.delete('/:productId', auth, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        cart.items = cart.items.filter(item => item.productId.toString() !== req.params.productId);
        await cart.save();
        await cart.populate('items.productId');
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;