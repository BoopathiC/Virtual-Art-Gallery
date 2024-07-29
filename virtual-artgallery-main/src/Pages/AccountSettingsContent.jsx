import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './Agal.css'


function ProfileInfo() {
  const handleSave = () => {
    alert("Profile data saved!");
  };

  return (
    <div>
      <h2>Information</h2>
     
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
        <TextField id="email" label="Email" variant="outlined" type='email' required />
      </Box>
      <p>*Required</p>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
        <TextField id="phoneNumber" label="Phone number" variant="outlined" type='number' placeholder="🇺🇸 +1 Enter your mobile phone number" />
      </Box>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
        <TextField id="location" label="Location" variant="outlined" type='text' />
      </Box>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
        <p>Price Range</p>
        <Select
          id="priceRange"
          label="Price Range"
          variant="outlined"
          placeholder='Price Range'
          fullWidth
        >
          <MenuItem value="">No budget in mind</MenuItem>
          <MenuItem value="500">$500 or less</MenuItem>
          <MenuItem value="1000">$1000 or less</MenuItem>
          <MenuItem value="1500">$1500 or less</MenuItem>
          <MenuItem value="2000">$2000 or less</MenuItem>
          <MenuItem value="100000">$100000 or less</MenuItem>
        </Select>
      </Box>
      
      <button onClick={handleSave} id='aapplybutton'>Save</button>
    </div>
  );
}

export default ProfileInfo;
