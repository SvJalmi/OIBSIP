import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const RazorpayCheckout = ({ amount, onPaymentSuccess, onPaymentFailure }) => {
    const [loading, setLoading] = useState(false);

    const initiatePayment = async () => {
        setLoading(true);
        try {
            const response = await axios.post('/api/payment/initiate', { amount });
            const { key, orderId } = response.data;

            const options = {
                key: key,
                amount: amount * 100, // amount in paise
                currency: 'INR',
                name: 'Pizza Delivery',
                description: 'Order Payment',
                order_id: orderId,
                handler: async function (response) {
                    await verifyPayment(response);
                },
                prefill: {
                    name: 'Customer Name',
                    email: 'customer@example.com',
                },
                theme: {
                    color: '#F37254',
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error('Payment initiation failed:', error);
            onPaymentFailure(error);
        } finally {
            setLoading(false);
        }
    };

    const verifyPayment = async (paymentResponse) => {
        try {
            const verificationResponse = await axios.post('/api/payment/verify', paymentResponse);
            if (verificationResponse.data.success) {
                onPaymentSuccess(verificationResponse.data);
            } else {
                onPaymentFailure(verificationResponse.data);
            }
        } catch (error) {
            console.error('Payment verification failed:', error);
            onPaymentFailure(error);
        }
    };

    useEffect(() => {
        if (window.Razorpay === undefined) {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => initiatePayment();
            document.body.appendChild(script);
        } else {
            initiatePayment();
        }
    }, [amount]);

    return (
        <div>
            {loading ? <p>Loading...</p> : <button onClick={initiatePayment}>Pay Now</button>}
        </div>
    );
};

export default RazorpayCheckout;