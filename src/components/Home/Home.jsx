import React from 'react'
import './Home.css'
import ria from '../../assets/ria6.jpg'

function Home() {
  return (
    <div className='dark-bg' id='Home'>
        <img src={ria} alt="profile"/>
        <div className='text-div'>
            <h1>
                RIA AutoRefurbishing Center
            </h1>
            <p>RIA Auto Refurbishment Centre is the leading destination for vehicle refurbishment in Abuja.</p> 
            <p>high quality sikkens products for painting with post paint maintenance service.</p>
            <div className='top-but'>
                <button><a href="#services">Read More</a></button>
                <button><a href="#contact">Contact us</a></button>
            </div>
        </div>
    </div>
  )
}

export default Home