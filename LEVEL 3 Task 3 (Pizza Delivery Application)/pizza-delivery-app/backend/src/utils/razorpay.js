const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const initiatePayment = async (amount, currency) => {
    const options = {
        amount: amount * 100, // amount in the smallest currency unit
        currency: currency,
        receipt: `receipt_order_${Math.random()}`,
    };

    try {
        const response = await razorpayInstance.orders.create(options);
        return response;
    } catch (error) {
        throw new Error('Payment initiation failed');
    }
};

const verifyPayment = async (paymentId, orderId, signature) => {
    const generatedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(orderId + '|' + paymentId)
        .digest('hex');

    if (generatedSignature === signature) {
        return true;
    } else {
        throw new Error('Payment verification failed');
    }
};

module.exports = {
    initiatePayment,
    verifyPayment,
};