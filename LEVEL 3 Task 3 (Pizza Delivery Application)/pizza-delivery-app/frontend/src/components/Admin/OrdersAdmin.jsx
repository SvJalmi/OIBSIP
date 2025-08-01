import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrdersAdmin = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/admin/orders');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const handleUpdateStatus = async (orderId, newStatus) => {
        try {
            await axios.put(`/api/admin/orders/${orderId}`, { status: newStatus });
            setOrders(orders.map(order => order._id === orderId ? { ...order, status: newStatus } : order));
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="orders-admin">
            <h2>Manage Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>User ID</th>
                        <th>Pizza ID</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.userId}</td>
                            <td>{order.pizzaId}</td>
                            <td>{order.status}</td>
                            <td>
                                <button onClick={() => handleUpdateStatus(order._id, 'Completed')}>Complete</button>
                                <button onClick={() => handleUpdateStatus(order._id, 'Cancelled')}>Cancel</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersAdmin;