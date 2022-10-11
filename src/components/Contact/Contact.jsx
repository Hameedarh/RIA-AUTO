import React from 'react'
import './Contact.css'
import {Envelope, House, Phone} from 'phosphor-react'
function Contact() {
  return (
    <div className='con-container' id='contact'>
                <h1 className='con-head'>Contact info</h1>
        <section className='con-cont'>
            <div>
                <div className='con-icons'>
                    <div className='round-div'>
                        <House size={32} color="#152235" background="#152235" />
                    </div>
                    <div>
                        <h3>Location</h3>
                        <h4>Ungwan Yellow, Apo, Abuja</h4>
                    </div>
                    {/* <Envelope size={32} color="#49c02b"/> */}
                </div>
                <div className='con-icons'>
                    <div className='round-div'>
                        <Phone size={32} color="#152235" background="#152235" />
                    </div>
                    <div>
                        <h3>Phone Number</h3>
                        <a href="https://wa.me/08163764664" ><h4  className='con-info'>08163764664</h4></a>
                    </div>
                    {/* <Envelope size={32} color="#49c02b"/> */}
                </div>
                <div className='con-icons'>
                    <div className='round-div'>
                        <Envelope size={32} color="#152235" background="#152235" />
                    </div>
                    <div>
                        <h3>Email</h3>
                        <a href="mailto:abisolahamidat@gmail.com"><h4 className='con-info'>abisolahamidat@gmail.com</h4></a>
                    </div>
                </div>
            </div>
            <div className='map'>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe className="gmap_iframe" title='ria' src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=ria autorefurbishing center&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe><a href="https://piratebay-proxys.com/">Piratebay</a>
                        </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact
