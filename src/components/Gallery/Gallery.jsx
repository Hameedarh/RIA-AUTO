import React from 'react'
import './Gallery.css'
import ria1 from '../../assets/ria11.jpg'
import ria2 from '../../assets/ria12.jpg'
import ria3 from '../../assets/ria13.jpg'
import ria4 from '../../assets/ria14.jpg'
import ria5 from '../../assets/ria 15.jpg'
import ria6 from '../../assets/ria16.jpg'
import ria7 from '../../assets/ria17.jpg'
import ria8 from '../../assets/ria18.jpg'
import ria9 from '../../assets/ria19.jpg'
import ria20 from '../../assets/ria20.jpg'


function Gallery() {

  return (
    <div className='gal-container' id='gallery'>
        <div className='gal-cont'>
            <h1>Our Gallery</h1>
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
                <div class="slide-container">
                    <div class="slide-wrapper">
                        <img src={ria1} alt="gallery"/>
                        <img src={ria9} alt="gallery"/>
                        <img src={ria2} alt="gallery"/>
                        <img src={ria5} alt="gallery"/>
                        <img src={ria4} alt="gallery"/>
                        <img src={ria20} alt="gallery"/>
                    </div>
                </div>
                <div class="slide-container">
                    <div class="slide-wrapper">
                        <img src={ria7} alt="gallery"/>
                        <img src={ria2} alt="gallery"/>
                        <img src={ria4} alt="gallery"/>
                        <img src={ria5} alt="gallery"/>
                        <img src={ria8} alt="gallery"/>
                        <img src={ria6} alt="gallery"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery
