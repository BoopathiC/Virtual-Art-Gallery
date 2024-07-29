import React, { useState, useEffect } from 'react';
import './Agal.css'
import img from '../photos/museum1.jpg';
import img1 from '../photos/museum2.jpg';
import img2 from '../photos/museum3.jpg';
import img3 from '../photos/museum4.jpg';
import Footer from './Footer';

const Amuseum = () => {
    const paintImages = [img, img1, img2, img3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % paintImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [paintImages.length]);
    return (
        <div>
          <div id="amushead">
          <img src={paintImages[currentImageIndex]} style={{ width: '1475px', height: '800px', marginLeft: '870px', marginTop: '1px', borderRadius: '0px', border: '100px', borderColor: "black", imageResolution: "revert-layer" }}></img>

            <h1 id='amuseh1'>Art Gallery For Museums </h1>
            <p id='amusep'>Promoting the collections and exhibitions of the Musée du Louvre, J. Paul Getty Museum, Robert<br></br> Rauschenberg Foundation, and over 700 major museums and institutions worldwide.</p>
            </div>
       
            <div id='amusehead1'>
            <h2 style={{marginLeft:'40px',paddingTop:'30px'}}>Showcasing Exciting Exhibitions Every Day</h2>
            <p style={{marginLeft:'40px'}}>Make sure art lovers discover your shows alongside thousands of spectacular museum and gallery exhibitions in New York, Paris, London, Tokyo, Hong Kong, Istanbul, Mexico City, and<br></br> more in our searchable shows listing.</p>
                <div id="mush1">
                    <h3>Guggenheim Museum</h3>
                    <p>New York</p>
                <img src="https://d7hftxdivxxvm.cloudfront.net/?height=334&quality=80&resize_to=fill&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FLXa9YHKRd2FvdGZk6pUPDg%2Fwide.jpg&width=445" style={{width:'300px',height:"220px"}}/></div>
                <div id='mush2'>
                <h3>San Francisco Museum of Modern <br></br>Art (SFMOMA)</h3>
                <p>San Francisco</p>
                <img src="https://d7hftxdivxxvm.cloudfront.net/?height=334&quality=80&resize_to=fill&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FDFJnsvHbSdwLRCoRF4hPVw%2Fwide.jpg&width=445" style={{width:'300px',height:"220px"}}/></div>
               <div id='mush3'> 
                <h3>Musée du Louvre</h3>
                <p>Paris</p><img src="https://d7hftxdivxxvm.cloudfront.net/?height=334&quality=80&resize_to=fill&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2Fe1kW5BjJhWcW65_mHEgTFg%2Fwide.jpg&width=445" style={{width:'300px',height:"220px"}}/></div>
               <br></br>
                <div id="mush4">
                    <h3>J. Paul Getty Museum</h3>
                    <p>Los Angeles</p>
                <img src="https://d7hftxdivxxvm.cloudfront.net/?height=334&quality=80&resize_to=fill&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2Fe1kW5BjJhWcW65_mHEgTFg%2Fwide.jpg&width=445" style={{width:'300px',height:"220px"}}/></div>
                <div id='mush5'>
                <h3>Serpentine Galleries <br></br>Art (SFMOMA)</h3>
                <p>Landon</p>
                <img src="https://d7hftxdivxxvm.cloudfront.net/?height=334&quality=80&resize_to=fill&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FZl6kIFonbwMDSYN95udJLA%2Fwide.jpg&width=445" style={{width:'300px',height:"220px"}}/></div>
               <div id='mush6'> 
                <h3>Van Gogh Museum</h3>
                <p>Amsterdam</p><img src="https://d7hftxdivxxvm.cloudfront.net/?height=334&quality=80&resize_to=fill&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FralcLixbqN6QZlwpsEiWlg%2Fwide.jpg&width=445" style={{width:'300px',height:"220px",paddingBottom:'90px'}}/></div>
               <Footer></Footer>
               </div>
            </div>
    )
}

export default Amuseum