import React from 'react';
import PizzaList from '../components/Dashboard/PizzaList';
import PizzaBuilder from '../components/Dashboard/PizzaBuilder';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Pizza Dashboard</h1>
            <PizzaList />
            <PizzaBuilder />
        </div>
    );
};

export default Dashboard;