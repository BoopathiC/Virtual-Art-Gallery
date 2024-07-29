import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import img from '../photos/avator.png';
import './Agal.css'

function ProfileInfo() {
  const [profileData, setProfileData] = useState({
    isVerifiedID: false,
    isVerifiedEmail: false
  });

  const handleSave = () => {
    console.log("Profile data saved:", profileData);
    alert("Profile data saved!");
  };

  return (
    <div>
      <h2>Profile Information</h2>
      <div>
        <img src={img} alt="Profile Avatar" />
      </div>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
        <TextField id="name" label="Name" variant="outlined" type='text' />
      </Box>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
        <TextField id="mail" label="Mail Id" variant="outlined" type='email' />
      </Box>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
        <TextField id="location" label="Location" variant="outlined" type='text' />
      </Box>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
        <TextField id="profession" label="Profession" variant="outlined" type='text' />
      </Box>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
        <TextField id="about" label="About" variant="outlined" type='text' />
      </Box>
      <p><strong>Verify Your ID:</strong> {profileData.isVerifiedID ? "Verified" : "Not Verified"}</p>
      <p><strong>Verify Your Email:</strong> {profileData.isVerifiedEmail ? "Verified" : "Not Verified"}</p>
      <p>For details, see FAQs or contact verification@VAG.net.</p>
      <button onClick={handleSave} id='aapplybutton'>Save</button>
    </div>
  );
}

export default ProfileInfo;
