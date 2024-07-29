import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import'./Agal.css'

function ShippingInformation() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Shipping information submitted:', { fullName, address, city, country, postalCode });
  };

  return (
    <div>
      <h2>Shipping Information</h2>
      <form onSubmit={handleFormSubmit}>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
        <TextField id="name" label="FULL Name" variant="outlined" type='text' />
      </Box>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
        <TextField id="mail" label="Address" variant="outlined" type='email' />
      </Box>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
        <TextField id="location" label="Coutry" variant="outlined" type='text' />
      </Box>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
        <TextField id="profession" label="State" variant="outlined" type='text' />
      </Box>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
        <TextField id="about" label="Postal Code" variant="outlined" type='text' />
      </Box>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
        <TextField id="about" label="Contact Number" variant="outlined" type='text' />
      </Box>
        <button type="submit" id='aapplybutton'>Save Changes</button>
      </form>
    </div>
  );
}

export default ShippingInformation;
