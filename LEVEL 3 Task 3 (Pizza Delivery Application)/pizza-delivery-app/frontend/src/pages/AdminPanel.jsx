import React, { useEffect, useState } from 'react';
import { getInventory, getOrders } from '../utils/api';
import InventoryManager from '../components/Admin/InventoryManager';
import OrdersAdmin from '../components/Admin/OrdersAdmin';

const AdminPanel = () => {
    const [inventory, setInventory] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchInventory = async () => {
            const data = await getInventory();
            setInventory(data);
        };

        const fetchOrders = async () => {
            const data = await getOrders();
            setOrders(data);
        };

        fetchInventory();
        fetchOrders();
    }, []);

    return (
        <div className="admin-panel">
            <h1>Admin Panel</h1>
            <InventoryManager inventory={inventory} />
            <OrdersAdmin orders={orders} />
        </div>
    );
};

export default AdminPanel;