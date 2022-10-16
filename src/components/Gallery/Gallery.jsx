import React from 'react'
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './Gallery.css'
import Gal from './Gal';


function Gallery() {
    
const galImages = [
    {
    id: 1,
    img: "Pictures/ria13.jpg"
    },
    {
    id: 2,
    img: "Pictures/ria17.jpg"
    },
    {
    id: 3,
    img: "Pictures/ria12.jpg"
    },
    {
    id: 4,
    img: "Pictures/ria18.jpg"
    },
    {
    id: 5,
    img: "Pictures/ria27.jpeg"
    },
    {
    id: 6,
    img: "Pictures/ria22.jpeg"
    }
  ];
  const fadeImages = [
      "Pictures/ria13.jpg",
      "Pictures/ria23.jpeg",
      "Pictures/ria12.jpg",
    "Pictures/ria18.jpg",
    "Pictures/ria27.jpeg"
  ];
  return (
    <div className='gal-container' id='gallery'>
        <div className='gal-cont'>
            <div className='galcenter'>
                <h1>Our Gallery</h1>
                <hr/>
            </div>
            <div className='img-container'>
                {
                    galImages.map((img)=>( 
                        <Gal
                        key={img.id}
                        img={img.img}/>
                    ))
                }
            </div>
            <div className="slide-show">
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
                        <div className="each-fade">
                        <img src={fadeImages[4]}  alt="pic1"/>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery
