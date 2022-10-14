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
// import ria20 from '../../assets/ria20.jpg'


function Gallery() {

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
                <div className='slide-wrap'>
                    <div>
                        <img src={ria1} alt="gallery" className='pic1'/>
                        <img src={ria9} alt="gallery" className='pic2'/>
                        <img src={ria2} alt="gallery" className='pic3'/>
                        
                    </div>
                </div>
            </div>
            <div className='slide-show'>
            <div className='slide-wrap'>
                    <div>
                        <img src={ria3} alt="gallery" className='pic4'/>
                        <img src={ria7} alt="gallery" className='pic5'/>
                        <img src={ria6} alt="gallery" className='pic6'/>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery
