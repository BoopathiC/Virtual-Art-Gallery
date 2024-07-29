import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function ResetPasswordForm() {
  const [otp, setOTP] = useState('');

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  return (
       <div id='fhole'>
          <div id='fpasswordhole'><center>
        <h1 id='passh'>Password Reset</h1>
        <p id='passp'>Your password reset email has been successfully sent. Please check your inbox, including your spam or junk folder, and follow the instructions to reset your password. If you don't receive the email within a few minutes, please contact our support team for further assistance.</p>
        <label  htmlFor="otp">Enter the OTP:</label><br />
        <input type="number"  name="otp"  value={otp}  onChange={handleOTPChange}  maxLength="6" required style={{padding:'7px',borderRadius:'20px',marginTop:'10px',backgroundColor:"#E1E2E2"}}/><br /><br />
        <Link to='/forgetpasswordreset2'>
        <input type="submit" value="Reset Password" id='forgetbutton'/></Link>
        </center>
        </div>

    </div>
 
  )
}

export default ResetPasswordForm; 
