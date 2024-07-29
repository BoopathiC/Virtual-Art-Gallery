import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Agallery = () => {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState('');

  const handclick = () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const location = document.getElementById('location').value;
    const partnerReason = document.getElementById('partnerReason').value;

    if (!isValidEmail(email)) {
      setAlertMessage('Please enter a valid email address.');
    } else if (!firstName.trim()) {
      setAlertMessage('Please enter your first name.');
    } else if (!lastName.trim()) {
      setAlertMessage('Please enter your last name.');
    } else if (!phoneNumber.trim()) {
      setAlertMessage('Please enter your Phone Number.'); 
    } else if (!location.trim()) {
      setAlertMessage('Please enter your location.');
    } else if (!partnerReason.trim()) {
      setAlertMessage('Please Choose your Partner Reason.');
    } else {
      navigate("/registersuccess");
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div>
      <div id="agalhead">
        <h1 id='agalh1'>Join the leading <br></br>global marketplace<br></br> for buying<br></br> and selling art.</h1>
        </div>
        <div>
         <div id='agalhead1'>
            <h2 style={{marginLeft:'360px',paddingTop:'60px'}}>The world’s art collectors,<br></br> all in one place</h2>
            <p style={{marginLeft:'360px',paddingTop:'20px'}}>Our global network of 2.5 million+ art enthusiasts <br></br>share the desire to discover and buy art with<br></br> confidence and ease. From New York to Seoul, a <br></br>collective of 4 million followers engage with Art galleries<br></br> editorial, curatorial, and social coverage.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIouDe--P0F6gdDesTsnO4haXy8-hv-ZfDKliYmHksQ&s" style={{width:'400px',height:"260px",marginLeft:'800px',marginTop:'-230px',paddingBottom:'50px'}}/>
        </div>
        <div id='agalhead1'>
            <h2 style={{marginLeft:'850px',paddingTop:'60px'}}>Personalized connection</h2>
            <p style={{marginLeft:'850px',paddingTop:'20px'}}>Through our iOS and Android app—with over 1<br></br> million downloads—and consumer marketing <br></br>emails, we connect with and re-engage collectors <br></br>via personalized, automated notifications about new<br></br> works for sale, based on their unique interests.</p>
            <img src="https://partners.artsy.net/wp-content/uploads/2021/06/unnamed-1.png" style={{width:'400px',height:"260px",marginLeft:'370px',marginTop:'-230px',paddingBottom:'50px'}}/>
        </div>
        <div id='agalhead1'>
            <h2 style={{marginLeft:'360px',paddingTop:'60px'}}>Trusted transactions</h2>
            <p style={{marginLeft:'360px',paddingTop:'20px'}}>Give collectors a secure and seamless purchasing<br></br> experience. Qualifying sales are backed by Art gallery<br></br> Seller Protection. In the event of a fraudulent <br></br>chargeback or dispute, Artsy will cover your losses<br></br> up to $100,000.</p>
            <img src="https://partners.artsy.net/wp-content/uploads/2021/06/ASSET-2_EMAIL-SML.jpg" style={{width:'400px',height:"260px",marginLeft:'800px',marginTop:'-230px',paddingBottom:'50px'}}/>
        <p>_________________________________________________________________________________________________________________________________________________________________________________________________________________________________</p>
        </div>
        </div>
        <div id='agalhead1'>
        <h2 style={{marginLeft:'590px',paddingTop:'30px'}}>Featured gallery resources</h2>
        <div  >
            <div id="fg1">
            <img src="https://partners.artsy.net/wp-content/uploads/2024/02/image-69.png" style={{width:'300px',height:"220px",marginLeft:'500px',paddingBottom:'10px'}}/></div>
            <div id="fg12">
            <p style={{marginLeft:'360px',paddingTop:'20px'}}><b>The Art gallery Instagram Toolkit for <br></br>Galleries</b><br></br>
Digital Marketing, Gallery Operations, Sales, <br></br>Toolkit
Read our new toolkit on how you <br></br>can leverage this powerful platform to <br></br>grow your gallery.</p></div>
            <div id='fg2'>
            <img src="https://partners.artsy.net/wp-content/uploads/2024/01/B2B-Webinar-Email-Invitation-hero-image-%E2%80%93-450-x-450-px-300x300.png" style={{width:'300px',height:"220px",marginLeft:'500px',paddingBottom:'10px'}}/></div>
            <div id='fg21'><p style={{marginLeft:'360px',paddingTop:'20px'}}><b>Webinar: Running a Tastemaking Gallery <br></br>in 2024</b><br></br>
Art Market, Webinar, Whitepaper<br></br>
Watch Art gallery Lead Project Manager for <br></br>Fair Partnerships, Nicole Restaino, discuss the<br></br> tastemaking gallery landscape with Nunu Hung<br></br> and Graham Wilson.</p></div>
           <div id='fg3'> <img src="https://partners.artsy.net/wp-content/uploads/2023/11/450x450-300x300.png" style={{width:'300px',height:"220px",marginLeft:'500px',paddingBottom:'10px'}}/></div>
           <div id='fg31'> <p style={{marginLeft:'360px',paddingTop:'20px'}}><b>Webinar: Trends that Defined the Art <br></br>Market in 2023</b><br></br>
Art Market, Webinar, Whitepaper<br></br>
Watch Art gallery Head of Galleries and Fairs, <br></br>Alex Forbes, discuss how the trends shaping <br></br>the art industry with Jessica Silverman and<br></br> Lock Kresler.</p></div><br></br>
        </div>
        <p>__________________________________________________________________________________________________________________________________________________________________________________________________________________________________</p>
        </div>
        <div id='agalformhole'>
        <br></br>
        <div id='agalform'>
          <center>
            <h2 style={{ paddingTop: '30px' }}>Partner with Art Gallery</h2>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
              <TextField id="firstName" label="First Name" variant="outlined" type='text' />
            </Box>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
              <TextField id="lastName" label="Last Name" variant="outlined" type='text' />
            </Box>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
              <TextField id="email" label="Email Address" variant="outlined" type='email' />
            </Box>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
              <TextField id="phoneNumber" label="Phone Number" variant="outlined" type='tel' />
            </Box>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
              <TextField id="location" label="Location" variant="outlined" type='text' />
            </Box>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
              <TextField
                id="partnerReason"
                select
                label="Why do you want to partner with Art Gallery?"
                variant="outlined"
              >
                <MenuItem value="Sell artworks for an art business">Sell artworks for an art business</MenuItem>
                <MenuItem value="Buy or sell artworks for a private collection">Buy or sell artworks for a private collection</MenuItem>
              </TextField>
            </Box>

            {alertMessage && (
              <Box sx={{ p: 1, borderRadius: 7, marginTop: -0, marginBottom: '-25px' }}>
                <p style={{ margin: 0, color: 'red', textAlign: 'center' }}>{alertMessage}</p>
              </Box>
            )}
            <button onClick={handclick} type="submit" id='aapplybutton'>Apply</button>
          </center>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Agallery;