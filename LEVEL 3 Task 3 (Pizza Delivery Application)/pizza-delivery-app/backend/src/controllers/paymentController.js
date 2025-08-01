exports.initiatePayment = async (req, res) => {
    const { amount, currency } = req.body;

    const options = {
        amount: amount * 100, // amount in smallest currency unit
        currency: currency,
        receipt: `receipt#${Math.random() * 1000}`,
    };

    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Payment initiation failed' });
    }
};

exports.verifyPayment = async (req, res) => {
    const { paymentId, orderId, signature } = req.body;

    const generatedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_SECRET)
        .update(orderId + '|' + paymentId)
        .digest('hex');

    if (generatedSignature === signature) {
        // Payment is verified
        res.json({ success: true });
    } else {
        res.status(400).json({ error: 'Payment verification failed' });
    }
};