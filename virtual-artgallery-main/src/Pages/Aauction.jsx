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
              <div id="aauctionhead">
        <h1 id='aauctionh1'>Art Gallery for Auctions</h1>
        </div>
        <div id='aauctionbody'>
         <div >
            <p style={{marginLeft:'360px',paddingTop:'130px'}}>Experience</p>
            <h2 style={{marginLeft:'360px'}}>Trusted Marketplace for<br></br>benefit and commerical<br></br>Auctions</h2>
            <p style={{marginLeft:'360px',paddingTop:'20px'}}>Our roster of global auction house partners is <br></br>rapidly expanding, including, Bonhams, Phillips, <br></br>Heritage, Rago/Wright, and Hindman Auctions. To <br></br>date, Artsy benefit auctions have helped to raise<br></br> more than $25 million for museums, nonprofit <br></br>organizations, and other charitable causes.</p>
            <img src="https://partners.artsy.net/wp-content/uploads/2022/06/partner-logos-scaled.jpeg" style={{width:'450px',height:"330px",marginLeft:'800px',marginTop:'-340px',paddingBottom:'50px'}}/>
        </div>
        <div >
        <p style={{marginLeft:'850px',paddingTop:'80px'}}>Audience</p>
            <h2 style={{marginLeft:'850px'}}>Reach a Global Audience of <br></br>24+ Million Collectors and<br></br> Art Lovers</h2>
            <p style={{marginLeft:'850px',paddingTop:'20px'}}>Since launching in October 2012, Artsy has had over 24 <br></br>million unique site visitors from 150+ countries across<br></br> web and mobile, driven by organic search traffic, as well <br></br>as growing engagement with the world’s most <br></br>comprehensive art resource, and other sources of <br></br>collector traffic.</p>
            <img src="https://partners.artsy.net/wp-content/uploads/2022/06/heatmap-1280x544.jpeg" style={{width:'450px',height:"330px",marginLeft:'320px',marginTop:'-340px',paddingBottom:'50px'}}/>
        </div>
        <div >
        <p style={{marginLeft:'360px',paddingTop:'80px'}}>Access</p>
            <h2 style={{marginLeft:'360px'}}>Maximize Bids With User-<br></br>Friendly Bidding Tools</h2>
            <p style={{marginLeft:'360px',paddingTop:'20px'}}>Artsy delivers a beautifully designed online bidding<br></br> experience—collectors can place bids on the web,<br></br> mobile, and tablet while receiving notifications about the<br></br> status of their bids. In addition to our timed online-only<br></br> auctions, Artsy’s Live Auction Integration software allows<br></br> collectors to browse lots from upcoming live sales, leave<br></br> max bids, and continue bidding in the live sale from<br></br> anywhere in the world</p>
            <img src="https://partners.artsy.net/wp-content/uploads/2022/06/bidding-screenshots-768x340.png" style={{width:'450px',height:"330px",marginLeft:'800px',marginTop:'-340px',paddingBottom:'50px'}}/>
        </div>
        <div >
        <p style={{marginLeft:'850px',paddingTop:'80px'}}>Private Sales</p>
            <h2 style={{marginLeft:'850px'}}>Access the Most<br></br> Comprehensive Database<br></br> for Artworks</h2>
            <p style={{marginLeft:'850px',paddingTop:'20px'}}>Artsy can be your additional source of private sales. Log <br></br>in and seamlessly browse hundreds of vetted artworks<br></br> from Modern to Post-War and Contemporary art. Artsy’s<br></br> private sales experts have international auction house <br></br>experience and liaise with our private sellers directly to <br></br>explain the auction process and walk them through<br></br> market pricing—ensuring a seamless experience for all<br></br> stakeholders.</p>
            <img src="https://partners.artsy.net/wp-content/uploads/2022/06/live-auction-room-768x494.png" style={{width:'450px',height:"330px",marginLeft:'320px',marginTop:'-360px',paddingBottom:'50px'}}/>
        </div>
        <div>
        <p style={{marginLeft:'360px',paddingTop:'80px'}}>Audience</p>
            <h2 style={{marginLeft:'360px'}}>Exceptional Services to<br></br> Reach New Collectors,<br></br> Drive Bid Activity, and <br></br>Promote Your Brand</h2>
            <p style={{marginLeft:'360px',paddingTop:'20px'}}>Artsy promotes auctions across the Artsy’s website,<br></br> iPhone, Android, and iPad apps, newsletter emails, <br></br>personalized “Follow” emails, push notifications, and<br></br> more. We also provide collectors with rich contextual <br></br>information, including artist biographies, lot descriptions,<br></br> and metadata, and to ensure you get maximum visibility<br></br> we use Collector targeting via The Art Genome Project.</p>
            <img src="https://partners.artsy.net/wp-content/uploads/2022/06/Artsy-Events-Auctions--768x493.png" style={{width:'450px',height:"330px",marginLeft:'800px',marginTop:'-370px',paddingBottom:'50px'}}/>
       
        </div>
        <div id='aauctionsupport'>
        </div>  
            <center><br></br>
            <p><b>Support</b></p>
            <h2>We're With You Every Step of the Way</h2>
            <p>Our auctions team is dedicated to delivering a world-class auction experience for<br></br>collectors and our partners. We'll lead you through every step of the process and<br></br>assist with getting the most out of your partnership with us.</p><br></br>
            </center><br></br>
            <hr></hr>
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