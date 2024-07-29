import React from 'react'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Contact.css'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Contact = () => {
  return (
    <div id='contacthole'>
      <div style={{marginLeft:'20px',marginTop:'30px'}}>
      <Link to="/">
        <ArrowBackIcon />
      </Link></div>
    <div id='margin'>
      <h4 id='contact'>CONTACT US</h4>
        </div>
        <div id='margin1'>
  <h3>Questions, Comments, or Concerns?</h3>
  <p>Use the form below to get in touch. Our office hours are Monday through Friday,9 am to 5 pm <br></br>Eastern, and we attempt to respond to support requests within 1 business day.</p></div>
  <input
        type="text" id='comment'
        placeholder="Please Write Your Comments..."/>
        <center><Link to ="/contactmsg">
        <button style={{marginRight:'160px'}} id='buttoncontact' >Submit</button>
     </Link>
        <Link to ="mailto:cboopathipnr@gmail.com">
        <button style={{marginRight:'160px'}} id='buttoncontact' >Send a Mail</button>
     </Link>
        </center>
        <div id='logohole'>
          <p id='contactp'>Our Social Network's</p>
          <a href='https://www.facebook.com/'>
          <InstagramIcon sx={{ fontSize: 30, color: 'black' }} id='logo' /></a>
        <a href='https://twitter.com/?lang=en'>
        <FacebookIcon sx={{ fontSize: 30, color: 'black' }} id='logo1' /></a>
        <a href='https://www.instagram.com/?hl=enn'>
        <XIcon sx={{ fontSize: 30, color: 'black' }} id='logo2' /></a>
        </div>
        </div>
  )
}

export default Contact