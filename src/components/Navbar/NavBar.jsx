import React from 'react'
import './NavBar.css'
import paint from '../../assets/rialogo.png'
import Middle from '../Middle/Middle'

function NavBar() {
  return (
    <div className='nav-container'>
        <div className='navwidth'>
            <div className='nameimg'>
                <img src={paint} alt="car paint" width={100} height={80}/>
                <h3>RIA AUTOREFURBISH</h3>
            </div>
            <nav className='nav-bar'>
                <ul>
                    <a href='#Home'><li>Home</li></a>
                    <a href='#services'><li>Service</li></a>
                    <a href='#gallery'><li>Gallery</li></a>
                    <a href='#contact'><li>Contact</li></a>
                </ul>
            </nav>
            <div className='but-nav'>
                <button className='nav-but'>Make an Appointment</button>
            </div>
            <div className='ham'>
                <Middle/>
            </div>
        </div>
    </div>
  )
}

export default NavBar
