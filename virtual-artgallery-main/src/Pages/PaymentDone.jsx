import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const PaymentDone = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <center>
    <div style={{marginRight:"600px",marginTop:"200px"}}>
      <h1>Payment Successful!</h1>
      <img src='https://media.tenor.com/40bYuytgRvYAAAAj/hedge-pay-hpay.gif' alt="Payment Done" style={{width:"20%",height:"20%"}}/>
      <h4>Thank you for your purchase.</h4>
      <h4>Your order has been successfully placed.</h4>
      <Link to="/"><button className='buy-button'>Continue Shopping</button></Link>
    </div>
    </center>
  );
};

const LoadingPage = () => {
  return <div style={{marginRight:"500px",marginTop:"200px"}}>
    <img src='https://media1.tenor.com/m/AmALF78zapsAAAAC/what-processing.gif' alt='loading..' style={{ maxWidth: '100%', height: 'auto' }} />

  </div>;
};

export default PaymentDone;