import React from 'react'
import img from '../photos/pandaart.png'
import { Link } from 'react-router-dom'

const Contactmsg = () => {
  return (

      <div id='contacthole'>
      <center>
     <div id='margin4'>
    <div style={{marginLeft:'-30px'}}>
       <img src={img} alt="Bookery Logo" width={300} height={130}/>
     </div>
     <br></br><br></br>
     <h4>Thank You For Contacting Us!</h4>
     <p>We have received your message<br></br>We'll reach you out immediately!</p>
     <Link to="/"><button id='buttoncontact1'>⬅️ Back to Homepage</button></Link>
            
    </div>
    </center>
    </div>
  )
}

export default Contactmsg