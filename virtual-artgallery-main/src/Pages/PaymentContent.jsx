import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function PaymentPage() {
  const [userType, setUserType] = useState('');
  

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    console.log('Payment information submitted:', {
      userType,
   
    });
  };

  return (
    <div>
      <h2>Payment Information</h2>
      <form onSubmit={handlePaymentSubmit}>
        <FormControl fullWidth>
          <InputLabel>User Type</InputLabel>
          <Select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <MenuItem value="buyer">Buyer</MenuItem>
            <MenuItem value="seller">Seller</MenuItem>
          </Select>
        </FormControl>
        <br />
       </form>
       </div>
  );
}

export default PaymentPage;
