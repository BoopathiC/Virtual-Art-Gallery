import React from 'react'
import './Agal.css'
import { Link } from 'react-router-dom'

const BidsContent = () => {
  return (
    <div>
      <h1>Auctions</h1>
      <p>Bid on works you love with auctions on VAG. With bidding opening daily, VAG connects collectors like you to art from leading auction houses, nonprofit organizations, and sellers across the globe. We feature premium artworks including modern, contemporary, and street art, so you can find works by your favorite artists—and discover new ones—all in one place.</p>
      <Link to='/aauction'>
        <button id='aapplybutton' style={{width:'300px'}}>Go to the Auction Page</button>
      </Link>
    </div>
  )
}

export default BidsContent