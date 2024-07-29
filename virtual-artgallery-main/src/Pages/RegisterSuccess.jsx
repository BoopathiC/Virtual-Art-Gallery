import React from 'react'
import './Register.css'
import img from '../photos/pandaart.png'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
const RegisterSuccess = () => {
  return (
    <div id='successhole'>
         <center>
           <div id='success'>
           <img src={img} alt="Bookery Logo" width={300} height={130}/>
             <h2>Registration Successfull !!!</h2><br></br>
             <CheckCircleRoundedIcon id='tick' color="primary" fontSize="large" />
             <p>Your Are Successfully Created An Account</p>
    </div><br></br>
              <p>Back to Login Page</p>
              <a href="/login">Login</a>
            
         </center>
    </div>
  )
}

export default RegisterSuccess