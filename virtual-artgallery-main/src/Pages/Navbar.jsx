import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Profile from '../Pages/Profile'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';


const CustomAppBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#b8b0b0', marginLeft: '-20px', width: 'calc(100% + 10px)' }}>
      <Toolbar sx={{ justifyContent: 'flex-start' }}>
        <div id='navbody'>
        <Link  to="/"><HomeIcon sx={{ fontSize: 26 }} edge="start" color="black" aria-label="menu"/></Link>
        <Link style={{ color: "black", textDecoration: "none", margin: "10px 10px 10px 60px" }} to="/login">Login</Link>
        <Link style={{ color: "black", textDecoration: "none", margin: "10px 10px 10px 20px" }} to="/register">Register</Link>
        <Link style={{ color: "black", textDecoration: "none", margin: "10px 10px 10px 20px" }} to="/about">About</Link>
        <Link style={{ color: "black", textDecoration: "none", margin: "10px 10px 10px 20px" }} to="/support">Contact</Link>
        <Link style={{ color: "black", textDecoration: "none", margin: "10px 10px 10px 20px" }} to="/seller">Sell</Link>
        <a style={{ color: "black", textDecoration: "none", margin: "10px 10px 10px 20px" }} href="https://oncyber.io/hub?coords=20.92x2.85x-18.78x1.13">3D Art Gallery</a>
        </div>
        <Profile/>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
