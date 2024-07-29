import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
const Shipping = () => {
  
    const location = useLocation();
    const { cartTotal } = location.state;

    const navigate = useNavigate(); 
    const handlClick = () => {
      navigate("/Payment" , { state: { cartTotal } });
    }

  return (
    <div >
      <div className='shipping'>
  <h1>Shipping Address</h1>
  <form>
    <div className="fog1">
      <div className="namq">
        <label className='card1'>First Name:</label>
        <input type="text" name="firstName" id="cardi" required/>
      </div>
      <div className="namq">
        <label className='card1'>Last Name:</label>
        <input type="text" name="lastName" id="cardi" required/>
      </div>
    </div><br></br>
    <label className='card1'>Address</label>
    <input type="text" name="lastName" id="cardi" required/><br /><br></br>
    <label className='card1'>City/Town</label>
    <input type="text" name="lastName" id="cardi" required/><br /><br></br>
    <label className='card1'>Country</label>
    <input type="text" name="lastName" id="cardi" required/><br /><br></br>
    <label className='card1'>Zip/Postal</label>
    <input type="text" name="lastName" id="cardi" required/><br /><br></br>
     <button className='button1' onClick={handlClick}>Continue to Pay</button> 
  </form>
</div>
    </div>
  )
}

export default Shipping