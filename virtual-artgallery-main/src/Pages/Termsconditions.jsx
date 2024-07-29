import React from 'react'
import './Terms.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import Footer from './Footer'
const Termsconditions = () => {
  return (
    <div id='termshole'>
       <div style={{marginLeft:'20px',marginTop:'30px'}}> 
          <Link to="/">
        <ArrowBackIcon />
      </Link></div>
      <h1 id='termshead'>Terms & Conditions</h1>
      <p id='termsp'>1. Goods & Services Tax will be applicable on all invoices at 12%. <br></br>

2. Shipping & handling charges will be applicable on deliveries outside Delhi NCR. <br></br>

3. Buyers with an Indian billing address will be invoiced in INR while buyers with a Non-Indian billing address will be invoiced in USD. The invoice will be raised basis the exchange rate on the sale day.<br></br>

4. All invoices will be raised by VAG Private Limited based on the information provided by the client. <br></br>

5. Full payment will be due and payable by the Buyer within 7 working days from the date of invoice.  <br></br>

6. The artwork will be delivered / shipped to the buyer once all necessary documentation related to transportation, tax, etc. is completed and the payment has been realized in full including any additional charges.  <br></br>

7. The artwork will be delivered with a basic frame. An authenticity certificate will be provided only on request.  <br></br>

8. Any price offered by VAG will be valid for a period of 15 days only. <br></br>

9. There might be a slight discrepancy in the image on the website and the actual artwork. Buyers are encouraged to view the work in person and discuss the condition report with a representative from VAG.  <br></br>

10. All artworks offered for sale by VAG are authentic to the best of their knowledge.  <br></br>

11. VAG owns the copyright and is duly authorized to use all images & illustrations of the artworks even after the sale.  <br></br>

12. These Terms & Conditions of Sale are subject to the laws of India and all parties hereby submit to the exclusive jurisdiction of the courts of Delhi, India.  <br></br></p><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<Footer/>
    </div>
  )
}

export default Termsconditions