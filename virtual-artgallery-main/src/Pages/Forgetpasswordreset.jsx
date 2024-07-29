import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import './Login.css'
import TextField from '@mui/material/TextField';
const Forgetpasswordreset = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  return (
    <div id='fhole'>
    <div id='fpasswordhole'><center>
        <h1 id='passh'>Password Reset</h1>
        <p id='passp'>Enter your Art Gallery email address that you used to register. We'll send you an email with your username and a link to reset your password.</p>
        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
      <TextField id="email" label="Mail Id or Username" variant="outlined" type='email'/>
    </Box>
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input id='passp'
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I am not a robot
          </label>
        </div>
        
        <br />
        <Link to='/forgetpasswordresetemail'>
        <button id='forgetbutton' type="submit">Send</button></Link><br></br><br></br>
        <p id='fpasswordp'>If you still hepl,contact <a href='/support'>Art Gallery Support</a></p>
      </form>
    </div>
    </center>
    </div>
    </div>
  );
}

export default Forgetpasswordreset