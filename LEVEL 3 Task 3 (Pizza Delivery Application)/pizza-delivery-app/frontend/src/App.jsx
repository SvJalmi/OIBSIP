import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import NotFound from './pages/NotFound';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import EmailVerification from './components/Auth/EmailVerification';
import PizzaList from './components/Dashboard/PizzaList';
import PizzaBuilder from './components/Dashboard/PizzaBuilder';
import InventoryManager from './components/Admin/InventoryManager';
import OrdersAdmin from './components/Admin/OrdersAdmin';
import RazorpayCheckout from './components/Payment/RazorpayCheckout';
import OrderStatus from './components/OrderStatus';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/admin" component={AdminPanel} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/verify-email" component={EmailVerification} />
        <Route path="/pizzas" component={PizzaList} />
        <Route path="/build-pizza" component={PizzaBuilder} />
        <Route path="/admin/inventory" component={InventoryManager} />
        <Route path="/admin/orders" component={OrdersAdmin} />
        <Route path="/checkout" component={RazorpayCheckout} />
        <Route path="/order-status" component={OrderStatus} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;