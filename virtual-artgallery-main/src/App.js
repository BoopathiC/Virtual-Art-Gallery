import React from 'react'
import {BrowserRouter,Route,Link,Routes,Outlet} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import About from './Pages/About'
import Support from './Pages/Contact'
import RegisterSuccess from './Pages/RegisterSuccess'
import ForgetPassword from './Pages/ForgetPassword'
import VirtualArtGallery from './Pages/VirtualArtGallery';
import Payment from './Pages/Payment';
import PaymentDone from './Pages/PaymentDone';
import Cashondel from './Pages/Cashondel';
import Contactmsg from './Pages/Contactmsg';
import Forgetpasswordreset from './Pages/Forgetpasswordreset'
import Forgetpasswordresetemail from './Pages/Forgetpasswordresetemail'
import Forgetpasswordreset2 from './Pages/Forgetpasswordreset2'
import Selerf from './Pages/Selerf'
import { CartProvider } from 'react-use-cart';
import Cart from './Pages/Cart';
import Termsconditions from './Pages/Termsconditions'
import Privacy from './Pages/Privacy'
import Agallery from './Pages/Agallery'
import Amuseum from './Pages/Amuseum'
import Aauction from './Pages/Aauction'
import Specialist from './Pages/Specialist'
import Editprofile from './Pages/Editprofile'
import { Search } from '@mui/icons-material'
import Shipping from './Pages/Shipping'

const Layout = () => {
  return (
    // <div style={{backgroundColor:"white" }}><hr/>
      <div style={{display: "flex", justifyContent: "right"}}>
  {/* <Link style={{color:"black",textDecoration:"none", margin: "0 10px"}} to="/">Home</Link> */}

{/* </div><hr/> */}
      <Outlet />
      
      
      
    </div>
  );
};
const App = () => {
  return (
    <BrowserRouter>
    <CartProvider>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="support" element={<Support/>}/>
        <Route path="registersuccess" element={<RegisterSuccess/>}/>
        <Route path="forgetpassword" element={<ForgetPassword/>}/>
        <Route path="/virtualartgallery" element={<VirtualArtGallery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentdone" element={<PaymentDone/>}/>
        <Route path="/cashondel" element={<Cashondel/>}/>
        <Route path="contactmsg" element={<Contactmsg/>}/>
        <Route path="forgetpasswordreset" element={<Forgetpasswordreset/>}/>
        <Route path="forgetpasswordresetemail" element={<Forgetpasswordresetemail/>}/>
        <Route path="forgetpasswordreset2" element={<Forgetpasswordreset2/>}/>
        <Route path="seller" element={<Selerf/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="terms" element={<Termsconditions/>}/>
        <Route path="privacy" element={<Privacy/>}/>
        <Route path="agallery" element={<Agallery/>}/>
        <Route path="amuseum" element={<Amuseum/>}/>
        <Route path="aauction" element={<Aauction/>}/>
        <Route path="specialist" element={<Specialist/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="editprofile" element={<Editprofile/>}/>
        <Route path="accountsettings" element={<Editprofile/>}/>
        <Route path="shipping" element={<Shipping/>}/>
      </Route>
      
    </Routes>
    </CartProvider>
    </BrowserRouter>
    
  )
}

export default App
