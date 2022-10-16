import React from 'react'
import './Gallery.css'
function Gal({img}) {
  return (
    <div>
        <div className='img-cont'>
            <img src={img} alt="gallery"/>
        </div>
    </div>
  )
}

export default Gal
