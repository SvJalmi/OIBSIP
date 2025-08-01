import { useEffect, useState } from 'react';
import axios from 'axios';

const useOrderStatus = (orderId) => {
    const [orderStatus, setOrderStatus] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrderStatus = async () => {
            try {
                const response = await axios.get(`/api/orders/${orderId}`);
                setOrderStatus(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrderStatus();

        const interval = setInterval(fetchOrderStatus, 5000); // Poll every 5 seconds

        return () => clearInterval(interval);
    }, [orderId]);

    return { orderStatus, loading, error };
};

export default useOrderStatus;