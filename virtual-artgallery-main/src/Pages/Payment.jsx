import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './Payment.css';
import { useLocation } from 'react-router-dom';


const Payment = () => {
  const location = useLocation();
    const { cartTotal } = location.state;

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isLoading, setIsLoading] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      
      setIsLoading(false);
      setPaymentError('');
      alert('Payment successful!');
    } catch (error) {
      setIsLoading(false);
      setPaymentError('Payment failed. Please try again later.');
    }
  };

  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate("/PaymentDone");
  }
  const handleClick1=()=>{
    navigate("/Cashondel");
  }

  return (
    <div className='payk'>
    <div className="containe">
      <h1 id='h1io'>Payment</h1>
      <h2>Total Amount: ${cartTotal}</h2>
      <div className="payment-options">
        <button
          className={`payment-option ${paymentMethod === 'card' && 'selected'}`}
          onClick={() => setPaymentMethod('card')}
        >
          Card Payment
        </button>
        <button
          className={`payment-option ${paymentMethod === 'cash' && 'selected'}`}
          onClick={() => setPaymentMethod('cash')}
        >
          Cash on Delivery
        </button>
        <button
          className={`payment-option ${paymentMethod === 'upi' && 'selected'}`}
          onClick={() => setPaymentMethod('upi')}
        >
          UPI Payment
        </button>
      </div>
      {paymentMethod === 'card' && (
        <form onSubmit={handleSubmit}>
          <h3>Debit/Credit Card</h3>
          <div className="form-group">
            <label className='card1'>Card Number:</label>
            <input type="number" placeholder='0000 0000 0000 0000' id="cardi" required />
            <label className='card1' >Expiry:</label>
            <input type="number" placeholder='MM / YY' id="cardi" required />
            <label className='card1' >CVV</label>
            <input type='cvv' placeholder='123' id="cardi"></input>
          </div><br></br><br></br>
          <button onClick={handleClick}  disabled={isLoading} className='button1'> Make Payment
          </button>
        </form>
      )}
      {paymentMethod === 'cash' && (
        <div className="instructions">
          <img src='https://img.freepik.com/free-vector/cash-delivery-concept-illustration_23-2148755957.jpg?w=740&t=st=1708759493~exp=1708760093~hmac=a14189adf342019cba4424ca40bb659cfc99350753a80137852de7142126c5ab' alt='COD' id='cod'></img>
          <p>Please keep exact change ready for the delivery person.</p>
          <button onClick={handleClick1} className='button1'> Place Order
          </button>
        </div>
      )}
      {paymentMethod === 'upi' && (
        <div className="instructions">
          <p>Scan the QR code or use the UPI ID provided to make the payment.</p>
          <img src='https://1.bp.blogspot.com/-dHN4KiD3dsU/XRxU5JRV7DI/AAAAAAAAAz4/u1ynpCMIuKwZMA642dHEoXFVKuHQbJvwgCEwYBhgL/s1600/qr-code.png' alt='uit' className='upii'></img>
          <p>OR</p>
          <label id='upiid'>UPI id:</label><br></br>
            <input id='upib' type='text' placeholder='upi id'></input><br></br><br></br>
          <button onClick={handleClick} className='button1'> Make Payment
          </button>
        </div>
      )}
      {paymentError && <p className="error-message">{paymentError}</p>}
    </div>
  
    </div>
  );
};

export default Payment;