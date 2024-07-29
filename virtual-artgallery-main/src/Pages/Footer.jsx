import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb_footer'>
        <div className='sb_links'>
        <div className='sb_links-div'>
        <h4>Virtual Art Gallery</h4>
           <p>VirtualArtGallery: Explore, engage, and purchase art effortlessly. Discover diverse artwork, add favorites to cart, and choose from convenient payment options.</p>
        </div>

        <div className='sb_links-div'>
          <h4>About us</h4>
          <a id='a' href='/about'>
            <p>About</p>
          </a>
          
          <a id='a' href='/support'>
            <p>Contact</p>
          </a>
          <a id='a' href='privacy'>
            <p>Privacy & Policy</p>
          </a>
          <a id='a' href='terms'>
            <p>Terms & Conditions</p>
          </a>
        </div>
        
        <div className='sb_links-div'>
          <h4>Support</h4>
          <a id='a' href='specialist'>
            <p>Talk to a Specialist</p>
          </a>
        </div>

        <div className='sb_links-div'>
          <h4>Partnerships</h4>
          <a id='a' href='agallery'>
            <p>Art Galleries</p>
          </a>
          <a id='a' href='amuseum'>
            <p>Art Gallery Museum's</p>
          </a>
          <a id='a' href='aauction'>
            <p>Art Gallery Auction's</p>
          </a>
        </div>

        <div className='sb_links-div'>
          <h4>Coming soon on</h4>
          <div className='socialmedia'>
            <p><Link to="/https://www.facebook.com/"><img src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt='fb'/></Link></p>
            <p><Link to="/https://twitter.com/"><img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt='twitter'/></Link></p>
            <p><Link to="mailto:cboopathipnr@gmail.com"><img src="https://cdn-icons-png.flaticon.com/128/11516/11516211.png" alt='gmail'/></Link></p>
            <p><Link to="/https://www.linkedin.com/"><img src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png" alt='linkedin'/></Link></p>
            <p><Link to="/https://www.instagram.com/"><img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt='insta'/></Link></p>
          </div>  
        </div>
        </div>
      
      <hr></hr>
      
      <div className='sb_footer-below'>
        <div className='sb_footer-copyright'>
          <p>
            @{new Date().getFullYear()} CodeInn. All right reserved.
          </p>
        </div>
        <div className='sb_footer-below-links'>
          <a id='a' href='/terms'><div><p>Terms & Conditions</p></div></a>
          <a id='a' href='/privacy'><div><p>Privacy</p></div></a>
          <a id='a' href='/'><div><p>Security</p></div></a>
          <a id='a' href='/'><div><p>Cookie Declaration</p></div></a>
        </div>
      </div>

      </div>      
    </div>
  )
}

export default Footer