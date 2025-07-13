import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OrderList from './components/OrderList';
import OrderForm from './components/OrderForm';

const App = () => {
  return (
    <Routes>
      <Route path="/orders" element={<OrderList />} />
      <Route path="/" element={<OrderForm />} />
    </Routes>
  );
};

export default App; // Default export