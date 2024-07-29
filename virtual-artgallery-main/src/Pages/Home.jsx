import React, { useState, useEffect } from 'react';
import './Home.css';
import './Searchbar.css'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from '../Pages/Navbar'
import { Link } from 'react-router-dom';
import img from '../photos/slide1.jpg';
import img1 from '../photos/slide2.jpg';
import img2 from '../photos/slide3.jpg';
import img3 from '../photos/slide4.jpg';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  const [data, setData] = useState("");
  const [pics, setPics] = useState([]);
  const [search, setSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (data.trim() !== "") {
      setSearch(data);
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (search.trim() !== "") {
        const apiKey = "563492ad6f917000010000010f2937acf07b4afc8352e644c7fdeb4f";
        const Url = `https://api.pexels.com/v1/search?query=${search}&per_page=8`;
        try {
          const response = await fetch(Url, {
            method: "Get",
            headers: {
              Accept: "application/json",
              Authorization: apiKey,
            },
          });
          const data = await response.json();
          setPics(data.photos);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchData();
  }, [search]);

  const paintImages = [img, img1, img2, img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % paintImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [paintImages.length]);

  return (
    <center>
      <br />
      <div id='nav'>
        <Navbar/>
      
      
              </div>
   
      <div id="homehead">
        <br />
        <img src={paintImages[currentImageIndex]} style={{ width: '400px', height: '500px', marginLeft: '870px', marginTop: '50px', borderRadius: '0px', border: '100px', borderColor: "black", imageResolution: "revert-layer" }} />
        <h1 id='homeh1'>Open your own art <br />exhibition.</h1>
        <h2 id="homeh2">Share your art with the world.
          Create your own online <br />art exhibition with easy and fast online tools.
          Share <br />your art freely and get instant visitors to your art<br /> exhibitions.
          Connect directly with art lovers globally <br />and sell your art directly to
          collectors, without middlemen<br /> or commissions.​​</h2>
      </div>
      <hr></hr>
      <div id='searchbarhole'>
        <div id='searchbarhead1'>
          <div>
            <form onSubmit={submitHandler}>
              <input id='searchbarinput'
                type="text"
                placeholder="Type Something"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              {!data ? (
                <button  id='searchbarbutton' type="submit" disabled={true}>
                  Search
                </button>
              ) : (
                <button id='searchbarbutton' type="submit">Search</button>
              )}
              <h3 id='searchbarresult'>
                All results for{" "}
                <span id='searchbarresult2'>{`${search}...`}</span>
              </h3>
            </form>
          </div>
        </div>

        <div id='searchbarshow'>
          {pics.map((item) => (
            <img id='searchbarimg'
              key={item.id}
              src={item.src.original}
              alt="pics"
              width="300px"
              height="300px"
            />
          ))}
        </div>
      </div>

<hr></hr>


      <div id='homeh3'><h4 id='homeh4'> Our Top Artists</h4></div>
      <div id="homehead3">
        <div id='artist'>
          <div id='artistimg1'></div>
          <div id='artistdetail'>
            <p>With a career spanning nearly six decades, Gerhard Richter is widely considered one of the greatest artists of our time.</p>
          </div>
        </div>

        <div id='artist'>
          <div id='artistimg2'></div>
          <div id='artistdetail'>
            <p>Robin Eley (born in London, England in 1978) is an Australian hyperrealist painter.<br></br>
              Eley has been a finalist in numerous Australian art prizes, most notably Runner Up in 2010. </p>
          </div>
        </div>

        <div id='artist'>
          <div id='artistimg3'></div>
          <div id='artistdetail'>
            <p>Anna-Lou Leibovitz born October 2, 1949 is an American portrait photographer best known for her engaging portraits, which often feature subjects in intimate settings and poses.</p>
          </div>
        </div>

        <div id='artist'>
          <div id='artistimg4'></div>
          <div id='artistdetail'>
            <p>Magdalena Carmen Frida Kahlo y Calderón (Spanish pronunciation: ˈfɾiða ˈkalo'; 6 July 1907 – 13 July 1954) was a Mexican painter known for her many portraits, self-portraits,
              and works inspired by the nature and artifacts of Mexico. </p>
          </div>
        </div>
      </div>






      <div id='homeh3'>
        <h4 id='homeh4' style={{ marginLeft: '100px' }}>VAG'S CHOICE </h4>
      </div>


      <div id='homehead5'>
        <div id='artist'>
          <div id='artimg1'></div>
          <div id='artisdetail'>
          <Link style={{ fontSize:'35px',color: "white", textDecoration: "none", margin: "40px 30px 0 20px",paddingTop:'40px' }} to="/virtualartgallery">LOVE ARTS</Link>

            <p style={{ color:"white",fontSize: '20px', marginLeft: '0px' }}>BY - Albrecht Dürer</p>
          </div>
        </div>

        <div id='artist'>
          <div id='artimg22'></div>
          <div id='artisdetail'>
          <Link style={{ fontSize:'35px',color: "white", textDecoration: "none", margin: "40px 30px 0 20px",paddingTop:'40px' }} to="/virtualartgallery">OIL ARTS</Link>

            <p style={{ fontSize: '20px', color:"white" ,marginLeft:'30px'}}>BY - Johannes Vermeer </p>
          </div>
        </div>

        <div id='artist'>
          <div id='artimg3'></div>
          <div id='artisdetail'>
          <Link style={{ fontSize:'35px',color: "white", textDecoration: "none", margin: "40px 30px 0 20px",paddingTop:'40px' }} to="/virtualartgallery">DOODLE ARTS</Link>

            <p style={{ fontSize: '20px', marginLeft: '10px',color:"white" }}>BY - SAM COX</p>
          </div>
        </div>

        <div id='artist'>
          <div id='artimg4'></div>
          <div id='artisdetail'>
          <Link style={{ fontSize:'35px',color: "white", textDecoration: "none", margin: "40px 30px 0 20px",paddingTop:'40px' }} to="/virtualartgallery">DIGITAL ARTS</Link>

            <p style={{ fontSize: '20px', marginLeft: '20px',color:"white" }}>BY - TURIEN TRAN</p>
          </div>
        </div>
        </div>
    
          <div id='homehead5'>
          <div id='artist'>
            <div id='artimg5'></div>
            <div  id='artisdetail'>
            <Link style={{ fontSize:'35px',color: "white", textDecoration: "none", margin: "40px 30px 0 20px",paddingTop:'40px' }} to="/virtualartgallery">DIGITAL ARTS</Link>

              <p style={{fontSize:'20px',marginLeft:'20px',color:"white"}}>BY - CLAIVE KEN</p>
            </div>
             
          </div>
          <div id='artist'>
            <div id='artimg6'></div>
            <div id='artisdetail'>
            <Link style={{ fontSize:'35px',color: "white", textDecoration: "none", margin: "40px 30px 0 20px",paddingTop:'40px' }} to="/virtualartgallery">OIL ARTS</Link>

              <p style={{fontSize:'20px',marginLeft:'20px',color:"white"}}>BY - JOSEPH BLACK</p>
            </div>
          </div>
          <div id='artist' >
            <div id='artimg7'></div>
            <div id='artisdetail'>
            <Link style={{ fontSize:'35px',color: "white", textDecoration: "none", margin: "40px 30px 0 20px",paddingTop:'40px' }} to="/virtualartgallery">DOODLE ARTS</Link>

              <p style={{fontSize:'20px',marginLeft:'10px',color:"white"}}>BY - MEGAN ROSE</p>
            </div> 
          </div> 
           <div id='artist'>
            <div id='artimg8'></div>
            <div id='artisdetail'>
            <Link style={{ fontSize:'35px',color: "white", textDecoration: "none", margin: "40px 30px 0 20px",paddingTop:'40px' }} to="/virtualartgallery">LOVE ARTS</Link>

              <p style={{color:"white",fontSize:'20px',marginLeft:'10px'}}>BY - OLIVER MELODY</p>
            </div>
            </div>
            </div>
            <div id='homehead6'>
        <h1 id='homeh1' style={{ marginLeft: '-600px', fontSize: '60px' ,marginTop:'50px'}}>Join in, it's free.</h1>
        <h3 id='homeh5' style={{ marginLeft: '-400px' ,marginTop:'20px'}}>An Open Art Platform
          For Art lovers, artists, galleries, collectors, universities,<br /> companies and anyone who is involved in the art world in some way.<br />
          <br />
          Create your free profile and company page, publish articles, start or<br /> join a group, make connections, get followers, post on your wall and <br />much more.
        </h3>
        <h1 id='homeh1' style={{ marginLeft: '-400px', fontSize: '40px' ,marginTop:'50px'}}>VAG's Shop is an Art Marketplace</h1>
        <h3 id='homeh5' style={{ marginLeft: '-400px' ,marginTop:'20px'}}>The world’s first direct and secondary marketplace for art!<br />
          Find all three artwork types, physical, digital and NFT. We're re-<br />writing the rules; democratising the art-online-shop world.<br />
          Buy and sell artworks commission-free.</h3>
        <h1 id='homeh1' style={{ marginLeft: '-700px', fontSize: '40px' ,marginTop:'50px'}}>Media Channel</h1>
        <h3 style={{ marginLeft: '-400px' }} id='homeh5'>Not in the market for buying or selling art? VAG's is free for anyone <br />who is interested in reading art news, watching videos of cutting<br /> edge projects, and connecting with other art enthusiasts.</h3>
        <button onClick={handleClick} id='gs'>GET STARTED</button><br></br><br></br>
<hr></hr>
      <Footer /> 
      </div>

    </center>
  );
}

export default Home;
