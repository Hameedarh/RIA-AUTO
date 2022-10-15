import React from 'react'
import './Home.css'
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Home() {
  const fadeImages = [
    "Pictures/ria5.jpg",
    "Pictures/ria6.jpg",
    "Pictures/ria7.jpg",
    "Pictures/ria9.jpg"
  ];
  return (
    <div className='dark-bg' id='Home'>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
          <img src={fadeImages[0]}  alt="pic1"/>
          </div>
          <div className="each-fade">
          <img src={fadeImages[1]} alt="pic1"/>
          </div>
          <div className="each-fade">
          <img src={fadeImages[2]}  alt="pic1"/>
          </div>
          <div className="each-fade">
          <img src={fadeImages[3]}  alt="pic1"/>
          </div>
        </Fade>
      </div>
        <div className='text-div'>
            <h1>
                RIA AutoRefurbishing Center
            </h1>
            <p>RIA Auto Refurbishment Centre is the leading destination for vehicle refurbishment in Abuja.</p> 
            <p>We use high quality sikkens products: a highly durable, high build, solvent-borne opaque that provides a satin paint-like finish on exterior surfaces.</p>
            <div className='top-but'>
                <button><a href="#services">Read More</a></button>
                <button><a href="#contact">Contact us</a></button>
            </div>
        </div>
    </div>
  )
}

export default Home