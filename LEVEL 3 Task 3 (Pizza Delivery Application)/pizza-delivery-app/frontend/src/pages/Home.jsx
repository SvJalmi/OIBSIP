import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Pizza Delivery</h1>
                <p>Your favorite pizzas delivered hot and fresh!</p>
            </header>
            <main className="home-main">
                <section className="pizza-varieties">
                    <h2>Our Pizza Varieties</h2>
                    <Link to="/dashboard" className="btn">View Pizzas</Link>
                </section>
                <section className="custom-pizza-builder">
                    <h2>Build Your Own Pizza</h2>
                    <Link to="/dashboard/pizza-builder" className="btn">Start Building</Link>
                </section>
            </main>
            <footer className="home-footer">
                <p>&copy; 2023 Pizza Delivery. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;