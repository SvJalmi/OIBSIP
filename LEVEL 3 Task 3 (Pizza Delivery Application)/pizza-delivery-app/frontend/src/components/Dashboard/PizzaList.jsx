import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PizzaList = () => {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await axios.get('/api/pizzas');
                setPizzas(response.data);
            } catch (err) {
                setError('Failed to fetch pizzas');
            } finally {
                setLoading(false);
            }
        };

        fetchPizzas();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="pizza-list">
            <h2>Available Pizzas</h2>
            <ul>
                {pizzas.map(pizza => (
                    <li key={pizza._id}>
                        <h3>{pizza.name}</h3>
                        <p>Base: {pizza.base}</p>
                        <p>Sauce: {pizza.sauce}</p>
                        <p>Cheese: {pizza.cheese}</p>
                        <p>Toppings: {pizza.toppings.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PizzaList;