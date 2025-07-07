import React, { useState } from 'react';
import axios from 'axios';

function OrderForm() {
  const [customerName, setCustomerName] = useState('');
  const [item, setItem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://34.207.100.161:8080/api/orders', {
      customerName,
      item,
      status: 'Pending'
    });
    alert('Order placed successfully!');
    setCustomerName('');
    setItem('');
  };

  return (
    <div>
      <h1>Place Delivery Order</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default OrderForm;