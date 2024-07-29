import React from 'react';
import { Link } from 'react-router-dom';


const CashOnDeliveryPlaced = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',marginRight:"350px",marginTop:"50px" }}>
    <div style={{ marginBottom: '20px' }}>
      <img src='https://cdn.dribbble.com/users/335541/screenshots/7102045/media/5b7237fe7bbfa31531d6e765576f1bc4.jpg' alt="Order Placed" style={{ width: '70%',height:'50%', marginBottom: '20px' }} />
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0' }}>Order Placed Successfully!</h1>
      <p style={{ fontSize: '18px', margin: '10px 0' }}>Your order has been confirmed and is now being processed.</p>
      <p style={{ fontSize: '18px', margin: '10px 0' }}>Thank you for shopping with us!</p>
    </div>
    <div style={{ marginTop: '10px' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
          Continue Shopping
        </button>
      </Link>
    </div>
  </div>
);

export default CashOnDeliveryPlaced;