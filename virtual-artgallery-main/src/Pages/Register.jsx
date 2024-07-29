
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Register.css';
import img from '../photos/pandaart.png';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState('');

  const handclick = () => {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if (!isValidEmail(email)) {
      setAlertMessage('Please enter a valid email address.');
    } else if (!name.trim()) {
      setAlertMessage('Please enter your full name.');
    } else if (!isValidPassword(password)) {
      setAlertMessage('Please enter a password with at least 4 characters.');
    } else {
      navigate("/registersuccess");
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 4;
  };

  return (
    <div id='reghead'>
      <center>
        <div style={{ marginLeft: '-30px' }}>
          <img id='logoimg' src={img} alt="Bookery Logo" width={300} height={130} />
        </div>
        <div id='regbody'>
          <h1 id='reg'>Create Account</h1>
          <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
            <TextField id="email" label="Email" variant="outlined" type='email' />
          </Box>
          <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
            <TextField id="name" label="Full Name" variant="outlined" type='text' />
          </Box>
          <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
            <TextField id="password" label="Password" variant="outlined" type='password' />
          </Box>
          {alertMessage && (
            <Box sx={{  p: 1, borderRadius: 7, marginTop: -0,marginBottom:'-25px' }}>
              <p style={{ margin: 0, color: 'red', textAlign: 'center' }}>{alertMessage}</p>
            </Box>
          )}
          <button onClick={handclick} id='regbutton'>Create</button>
        </div>
        <p id='regpad'>Already have an Account?
        <Link to='/login'> <p>Login</p></Link></p>
      </center>
    </div>
  );
}