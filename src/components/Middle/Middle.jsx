import React from 'react'
import './Middle.css'

function Middle() {
  return (
    <div className='mid-container'>
      <div className='mid-cont'>
        <div className='ham-index'>
          <input type="checkbox" className='res-inp'/>
            <span className='ham-span'></span>
            <span className='ham-span'></span>
            <span className='ham-span'></span>
                {/* <List size={50} /> */}
          <ul className='hamburger'>
            <a href='#Home'><li>Home</li></a>
            <a href='#services'><li>Service</li></a>
            <a href='#gallery'><li>Gallery</li></a>
            <a href='#contact'><li>Contact</li></a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Middle
