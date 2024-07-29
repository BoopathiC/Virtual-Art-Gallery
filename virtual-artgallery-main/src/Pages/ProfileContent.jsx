import React, { useState } from 'react';
import img from '../photos/avator.png';
import './Agal.css'

function ProfileInfo() {
  const [profileData, setProfileData] = useState({
    name: "User",
    email: "user.com",
    bio: "Buyer / Seller",
    image: "/path/to/image.jpg", 
    location: "Tirunelveli, TamilNadu",
    profession: "Artist",
    about: "I'm passionate about creating art that inspires others.",
    isVerifiedID: true,
    isVerifiedEmail: true,
  });

  const handleSave = () => {
    console.log("Profile data saved:", profileData);
    alert("Profile data saved!");
  };

  return (
    <div>
      <h2>Profile Information</h2>
      <div  >
        <img src={img} className='profile' alt="Profile Avatar"  />
      </div><center>
      <p><strong>Name:</strong> {profileData.name}</p>
      <p><strong>Email:</strong> {profileData.email}</p>
      <p><strong>Location:</strong> {profileData.location}</p>
      <p><strong>Profession:</strong> {profileData.profession}</p>
      <p><strong>About:</strong> {profileData.about}</p>
      <p><strong>Verify Your ID:</strong> {profileData.isVerifiedID ? "Verified" : "Not Verified"}</p>
      <p><strong>Verify Your Email:</strong> {profileData.isVerifiedEmail ? "Verified" : "Not Verified"}</p>
      <p>For details, see FAQs or contact verification@VAG.net.</p>
      <button onClick={handleSave} id='aapplybutton'>Save</button><br></br>
      </center>
    </div>
  );
}

export default ProfileInfo;
