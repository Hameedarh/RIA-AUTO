import React from 'react'
import './Service.css'

function Service() {
  return (
    <div className='service-container' id='services'>
        <div  className='service-cont'>
            <div className='center-text'>
                <h1>Our Services</h1>
                <hr/>
            </div>
            <div className='serdiv'>
                <div className='serdiv1'>
                    <p className='ser-text-left'>
                    We use <span style={{color:"rgb(52,152,219) "}}>High-Quality</span> paints, automated baking oven, car waxing/buffing to ensure high quality of service is delivered to our prestigious clients/customers
                    </p>
                </div>
                <div className='serdiv2'>
                    <img src="Pictures/ria27.jpeg" alt="buffing"/>
                    <img src="Pictures/ria22.jpeg" alt="car in an oven"/>
                    <img src="Pictures/ria21.jpeg" alt="car in an oven"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service
