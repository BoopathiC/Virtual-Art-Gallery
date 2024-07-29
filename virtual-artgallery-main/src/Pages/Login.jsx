import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Login.css';
import img from '../photos/pandaart.png';
import { Link, useNavigate } from 'react-router-dom';

export default function BasicTextFields() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!isValidEmail(email)) {
      setAlertMessage('Please enter a valid email address.');
    } else if (!isValidPassword(password)) {
      setAlertMessage('Please enter a password with at least 4 characters.');
    } else {
      navigate("/");
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[a-z]{1,}$/.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 4;
  };

  
  return (
    <div id='loghead'>
      <center>
        <div style={{ marginLeft: '-30px' }}>
          <img id='logoimg' src={img} alt="Bookery Logo"/>
        </div>
        <div id='logbody'><div>
          <h1 id='logh1'>Welcome Back! </h1>
          <h3 >Login To Continue </h3></div>
          <form onSubmit={handleSubmit}>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
              <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="email" label="Mail Id" variant="outlined" type='email' />
            </Box>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
              <TextField value={password} onChange={(e) => setPassword(e.target.value)} id="password" label="Password" variant="outlined" type='password' />
            </Box>
            <Link to="/forgetpasswordreset">
              <p id='fpassword'>Forget Password?</p>
            </Link>
            {alertMessage && (
              <Box sx={{  p: 1, borderRadius: 7, marginTop: -0,marginBottom:'-25px' }}>
                <p id='logalert' style={{ margin: 0, color: 'red', textAlign: 'center' }}>{alertMessage}</p>
              </Box>
            )}
            <button type="submit" id='logbutton'> LOGIN</button>
          </form>
        </div>
        <p id='logpad'>Create an Account?</p>
        <Link to="/register">
          <p id='logsign'>Signup</p>
        </Link>
      </center>
    </div>
  );
}
