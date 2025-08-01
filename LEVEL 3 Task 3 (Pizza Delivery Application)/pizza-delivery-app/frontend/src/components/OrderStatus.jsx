import React, { useEffect, useState } from 'react';
import { getOrderStatus } from '../utils/api';
import './OrderStatus.css';

const OrderStatus = ({ orderId }) => {
    const [orderStatus, setOrderStatus] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrderStatus = async () => {
            try {
                const status = await getOrderStatus(orderId);
                setOrderStatus(status);
            } catch (error) {
                console.error('Error fetching order status:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrderStatus();
    }, [orderId]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="order-status">
            <h2>Order Status</h2>
            {orderStatus ? (
                <div className={`status ${orderStatus}`}>
                    <p>Your order is currently: <strong>{orderStatus}</strong></p>
                </div>
            ) : (
                <p>Order not found.</p>
            )}
        </div>
    );
};

export default OrderStatus;