import React from 'react'
import Contact from '../components/Contact/Contact'
import Footer from '../components/footer/Footer'
import Gallery from '../components/Gallery/Gallery'
// import ApForm from '../components/AppointmentForm/ApForm'
import Home from '../components/Home/Home'
import NavBar from '../components/Navbar/NavBar'
import NewsLetter from '../components/Newsletter/NewsLetter'
// import StickyNav from '../components/Navbar/StickyNav'
import Service from '../components/service/Service'
import Topbar from '../components/Topbar'
import './HomePage.css'

function HomePage() {
  return (
    <div>
        <Topbar/>
        <div className='fixednav'>
          <NavBar/>
        </div>
        <Home/>
        <Service/>
        <Gallery/>
        <NewsLetter/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default HomePage
