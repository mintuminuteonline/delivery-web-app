import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://34.207.100.161:8080/api/orders')
      .then(response => setOrders(response.data));
  }, []);

  const updateStatus = async (id, status) => {
    const order = orders.find(o => o.id === id);
    await axios.put(`http://34.207.100.161:8080/api/orders/${id}`, { ...order, status });
    setOrders(orders.map(o => o.id === id ? { ...o, status } : o));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.customerName} - {order.item} - {order.status}
            <button onClick={() => updateStatus(order.id, 'Delivered')}>Mark as Delivered</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;