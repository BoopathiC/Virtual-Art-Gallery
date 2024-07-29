import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import img from '../photos/about.jpg';
import img1 from '../photos/earth1.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const About = () => {
  return (
    <div id='abouthole'>
      <div style={{marginLeft:'20px'}}>
      <Link to="/">
        <ArrowBackIcon />
      </Link></div>
      <center>
        <h4 id='head'>ABOUT US</h4>
        <h1 id='h1'>The world’s destination<br></br>for design</h1>
        <p id='p'>We’re on a mission to build the world’s best community for creatives to share, grow, and get hired.</p>
        <img src={img} alt="about" id='img' width={600} height={370} style={{ marginRight: '-25px'}} />
        <p id='p'>Welcome to Art Gallery, where we embark on a visual journey through the ever-changing landscape of design. 
        As passionate advocates for creativity and innovation, we've curated a unique gallery that captures the essence of 
        design trends from 2009 to the present day.Our story began with a simple idea: to chronicle the evolution of design by
        showcasing the incredible talent and creativity of designers around the world. Founded in 2024, we've grown alongside 
        the design community, witnessing firsthand the shifts, trends, and revolutions that have shaped our industry.At Art 
        Gallery, we believe that every pixel tells a story. From the bold experimentation of the early 2010s to the minimalist
        elegance of recent years, each design shot featured in our gallery represents a moment in time, a snapshot of creativity
        in motion.But our mission goes beyond mere observation. We're here to inspire, to educate, and to empower the next
        generation of designers. Whether you're a seasoned professional seeking inspiration or a budding artist searching fo
        guidance, our curated collection offers a wealth of insights, ideas, and possibilities.As we look back on the past
        decade of design, we're filled with gratitude for the countless designers, innovators, and dreamers who have 
        contributed to our shared creative journey. We're proud to be a part of this vibrant community, and we're excited to 
        continue exploring the endless possibilities of design together.Join us as we celebrate the past, embrace the present,
        and imagine the future of design. Welcome to Art Gallery—where every pixel tells a story, and creativity knows no bounds.</p>
        <img src={img1} alt="about" id='img1' width={400} height={270} style={{ marginRight: '-25px'}} />
        <h3 id='join'>Join our team</h3> 
        <p id='p'>Since we are a 100% distributed team, you can work from anywhere. No need to <br></br>
            move for a job. We are proud of a culture of communication, <br></br>
            collaboration, trust and kindness.</p> 
      </center>
    </div>
  );
}

export default About;
