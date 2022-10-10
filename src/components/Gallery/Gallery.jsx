import React from 'react'
import './Gallery.css'
import ria1 from '../../assets/ria11.jpg'
import ria2 from '../../assets/ria12.jpg'
import ria3 from '../../assets/ria13.jpg'
import ria4 from '../../assets/ria14.jpg'
import ria5 from '../../assets/ria15.jpg'

function Gallery() {
  return (
    <div className='gal-container' id='gallery'>
        <div className='gal-cont'>
            <h1>Our Gallery</h1>
            <div className='img-container'>
                <div className='img-cont'>
                    <img src={ria1} alt="gallery"/>
                </div>
                <div className='img-cont'>
                    <img src={ria2} alt="gallery"/>
                </div>
                <div className='img-cont'>
                    <img src={ria4} alt="gallery"/>
                </div>
                <div className='img-cont'>
                    <img src={ria5} alt="gallery"/>
                </div>
                <div className='img-cont'>
                    <img src={ria3} alt="gallery"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery
