import React, { useState } from 'react';

const PizzaBuilder = () => {
    const [pizza, setPizza] = useState({
        name: '',
        base: '',
        sauce: '',
        cheese: '',
        toppings: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPizza({
            ...pizza,
            [name]: value
        });
    };

    const handleToppingChange = (topping) => {
        setPizza((prevPizza) => {
            const toppings = prevPizza.toppings.includes(topping)
                ? prevPizza.toppings.filter(t => t !== topping)
                : [...prevPizza.toppings, topping];
            return { ...prevPizza, toppings };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to submit the custom pizza to the backend
        console.log('Custom Pizza:', pizza);
    };

    return (
        <div className="pizza-builder">
            <h2>Build Your Custom Pizza</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Pizza Name"
                    value={pizza.name}
                    onChange={handleChange}
                    required
                />
                <select name="base" value={pizza.base} onChange={handleChange} required>
                    <option value="">Select Base</option>
                    <option value="thin">Thin Crust</option>
                    <option value="thick">Thick Crust</option>
                </select>
                <select name="sauce" value={pizza.sauce} onChange={handleChange} required>
                    <option value="">Select Sauce</option>
                    <option value="tomato">Tomato Sauce</option>
                    <option value="pesto">Pesto Sauce</option>
                </select>
                <select name="cheese" value={pizza.cheese} onChange={handleChange} required>
                    <option value="">Select Cheese</option>
                    <option value="mozzarella">Mozzarella</option>
                    <option value="cheddar">Cheddar</option>
                </select>
                <div>
                    <h4>Select Toppings:</h4>
                    {['pepperoni', 'mushrooms', 'onions', 'olives'].map(topping => (
                        <label key={topping}>
                            <input
                                type="checkbox"
                                checked={pizza.toppings.includes(topping)}
                                onChange={() => handleToppingChange(topping)}
                            />
                            {topping}
                        </label>
                    ))}
                </div>
                <button type="submit">Create Pizza</button>
            </form>
        </div>
    );
};

export default PizzaBuilder;