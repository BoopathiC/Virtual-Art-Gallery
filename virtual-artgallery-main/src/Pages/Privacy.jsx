import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import './Terms.css'
import Footer from './Footer'

const Privacy = () => {
  return (
    <div id='privacyhole'>
      <div style={{marginLeft:'20px',marginTop:'30px'}}> 
          <Link to="/">
        <ArrowBackIcon />
      </Link></div>
        <h1 id='privacyhead'>Privacy Policy</h1>
        <p id='privacyp'>To better protect your privacy we provide this Privacy Policy explaining our online information practices and the choices you can make about the way your information is collected and used. <br></br>To make this policy easy to find, we make it available on every page of our site, including the VAG.gallery homepage.<br></br>
This Privacy Policy applies to all of the products, services and websites offered by VAG Private Limited or its subsidiaries or affiliated companies; collectively the VAG "services".<br></br></p>
        <h2 id='privacyhead'>THE INFORMATION WE COLLECT</h2>
        <p id='privacyp'>This policy applies to all information collected or submitted through the VAG services. We offer a number of services that do not require you to register for an account or<br></br> provide any personal information to us, such as browsing the art, artists and other information. In order to provide our full range of services, you might need to register and we may collect the <b>following types of information:</b><br></br>

Information that you provide:When you sign up for VAG.gallery or other VAG service or promotion that requires registration, we ask you for personal information (such as your name, email address and an account password). For certain services, such as purchasing or renting, we also request credit card or other payment account information, which we maintain in secure form. We may combine the information that you submit under your account with information from other VAG services or third parties, in order to provide you with a better experience and to improve the quality of our services.

Cookies: When you visit VAG.gallery, we may send one or more cookies a small file containing a string of characters to your computer or other device that uniquely identifies your browser. We use cookies to improve the quality of our service, including storing of user preferences, improving recommendations and tracking user trends.

Log information: When you access VAG services, our servers automatically record information that your browser sends to us. These server logs may include information such as your web request, Internet Protocol address, browser type, browser language, the date and time of your request and one or more cookies that may uniquely identify your browser.

User communications: When you send emails or other communications to VAG, we may retain those communications in order to process your enquiries, respond to your requests and improve our services.<br></br>

<b>Other sites:</b> This Privacy Policy applies to VAG services only. We do not exercise control over other sites linked from our services, either by us or by user-generated content in our services. These other sites may place their own cookies or other files on your computer, collect data or solicit personal information from you.</p>
   <br></br>
   <h2 id='privacyhead'>HOW WE USE THE INFORMATION</h2>
   <p id='privacyp'>
   VAG only processes personal information for the purposes described in this Privacy Policy. Such purposes include:<br></br>

* Providing our services;<br></br>
* Auditing, research and analysis in order to maintain, protect and improve our services;<br></br> 
* Ensuring the technical functioning of our services;<br></br>
* Protecting the rights or property of our users and VAG; and Developing new services.<br></br>
   </p>
   <h2 id='privacyhead'>INFORMATION SHARING</h2>
   <p id='privacyp'>We may share with individuals and third parties certain pieces of aggregated, non-personal information, such as the number of users on the site, or how many users have viewed a profile or clicked on a particular piece of artwork. Such information will never identify you individually.

We only share personal information with other companies or individuals outside VAG when we have your consent or as described under this Privacy Policy. We require opt-in consent for the sharing of any sensitive personal information.

We might also share personal information with third parties outside of VAG to (a) satisfy any applicable law, regulation, legal process or enforceable governmental request, (b) enforce applicable Terms of Service, including investigation of potential violations thereof, (c) detect, prevent or otherwise address fraud, security or technical issues, or (d) protect against harm to the rights, property or safety of VAG, its users or the public, as required or permitted by law.
We use the information you provide about yourself when placing an order only to complete that order. We do not share this information with outside parties except to the extent necessary to complete that order or when we have your specific consent to do so.

We use non-identifying and aggregate information to better design our website. For example, we may tell an advertiser the number of individuals visited a certain area on our website, or the number of men and number of women that filled out our registration form, but we would not disclose anything that could be used to identify those individuals.</p>
  <h2 id='privacyhead'>OUR COMMITMENT TO DATA SECURITY</h2>
  <p id='privacyp'>To prevent unauthorized access, maintain data accuracy, and ensure the correct use of information, we have put in place appropriate physical, electronic, and managerial procedures to safeguard and secure the information we collect online.</p>
  
  <h2 id='privacyhead'>CHANGES TO THIS PRIVACY POLICY</h2>
  <p id='privacyp'>Please note that this Privacy Policy may change from time to time. We will not reduce your rights under this Privacy Policy without your explicit consent and we expect that the majority of such changes will be minor. Regardless, we will post any Privacy Policy changes on this page and, if the changes are significant, we will provide a more prominent notice.</p>
  
  <h2 id='privacyhead'>HOW TO CONTACT US</h2>
  <p id='privacyp'>Should you have other questions or concerns about this Privacy Policy, please contact our team on info@VAG.gallery</p>
<Footer></Footer>
    </div>
  )
}

export default Privacy