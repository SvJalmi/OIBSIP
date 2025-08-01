import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InventoryManager = () => {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const response = await axios.get('/api/admin/inventory');
                setInventory(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchInventory();
    }, []);

    const handleUpdate = async (itemId, newQuantity) => {
        try {
            await axios.put(`/api/admin/inventory/${itemId}`, { quantity: newQuantity });
            setInventory(prevInventory => 
                prevInventory.map(item => 
                    item._id === itemId ? { ...item, quantity: newQuantity } : item
                )
            );
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Inventory Manager</h1>
            <table>
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map(item => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>
                                <input 
                                    type="number" 
                                    value={item.quantity} 
                                    onChange={(e) => handleUpdate(item._id, e.target.value)} 
                                />
                            </td>
                            <td>
                                <button onClick={() => handleUpdate(item._id, item.quantity)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryManager;