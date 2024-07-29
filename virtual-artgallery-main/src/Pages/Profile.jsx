import React from 'react'
import { useState } from 'react';
import './Profile.css'
import img from '../photos/avator.png';
import img1 from '../photos/usericon.jpg';
import img2 from '../photos/editicon.png';
import img3 from '../photos/envelopeicon.png';
import img4 from '../photos/settingsicon.jpg';
import img5 from '../photos/questionicon.png';
import img6 from '../photos/logouticon.jpg';

const Profile = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  
    const menuToggle = () => {
      setMenuActive(!isMenuActive);
    };
  
  return (
    
    <div>
       <div className="action">
      <div className="profile" onClick={menuToggle} style={{marginLeft:'770px'}}>
        <img src={img} alt="Profile Avatar"  />
      </div>
      <div className={`menu ${isMenuActive ? 'active' : ''}`}>
        <h3>
          User<br/>
          <span>user@gmail.com</span>
        </h3>
        <ul>
          <li>
            <img src={img1} alt="User Icon" />
            <a href="/editprofile">My profile</a>
          </li>
          {/* <li>
            <img src={img2} alt="Edit Icon" />
            <a href="/editprofile">Edit profile</a>
          </li> */}
          <li>
            <img src={img3} alt="Envelope Icon" />
            <a href="#">Inbox</a>
          </li>
          <li>
            <img src={img4} alt="Settings Icon" />
            <a href="/accountsettings">Settings</a>
          </li>
          <li>
            <img src={img5} alt="Question Icon" />
            <a href="/support">Help</a>
          </li>
          <li>
            <img src={img6}alt="Logout Icon" />
            <a href="/login">Logout</a>
          </li>
        </ul>
      </div>
      </div>
      </div>
  
  )
}

export default Profile