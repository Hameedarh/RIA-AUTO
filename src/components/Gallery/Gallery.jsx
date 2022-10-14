import React from 'react'
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './Gallery.css'
// import ria1 from '../../assets/ria11.jpg'
import ria2 from '../../assets/ria12.jpg'
import ria3 from '../../assets/ria13.jpg'
import ria4 from '../../assets/ria14.jpg'
import ria5 from '../../assets/ria 15.jpg'
// import ria6 from '../../assets/ria16.jpg'
import ria7 from '../../assets/ria17.jpg'
import ria8 from '../../assets/ria18.jpg'
import ria9 from '../../assets/ria19.jpg'
// import ria20 from '../../assets/ria20.jpg'


function Gallery() {
    
const fadeImages = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
  ];
  return (
    <div className='gal-container' id='gallery'>
        <div className='gal-cont'>
            <div className='galcenter'>
                <h1>Our Gallery</h1>
                <hr/>
            </div>
            <div className='img-container'>
                <div className='img-cont'>
                    <img src={ria7} alt="gallery"/>
                </div>
                <div className='img-cont'>
                    <img src={ria2} alt="gallery"/>
                </div>
                <div className='img-cont'>
                    <img src={ria4} alt="gallery"/>
                </div>
                <div className='img-cont'>
                    <img src={ria9} alt="gallery"/>
                </div>
                <div className='img-cont'>
                    <img src={ria3} alt="gallery"/>
                </div>
                <div className='img-cont'>
                    <img src={ria8} alt="gallery"/>
                </div>
                <div className='img-cont'>
                    <img src={ria5} alt="gallery"/>
                </div>
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
                    </Fade>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery
