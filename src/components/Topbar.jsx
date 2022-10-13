import React from 'react'
import './Topbar.css'
import { MapPin, Phone, EnvelopeOpen, WhatsappLogo, FacebookLogo } from 'phosphor-react'

function Topbar() {
  return (
    <div className='topdiv'>
        <div className='topwidth'>
            <div className='con-div'>
                <div className='loc-div'>
                    <div className='map-div'>
                        <MapPin size={20} />
                        <p>Plot 1486, Cadastral Zone C12 Kabusa District, Abuja</p>
                    </div>
                    <div className='map-div'>
                        <Phone size={20} />
                        <a href="https://wa.me/08033041929" ><p>08033041929</p></a>
                    </div>
                </div>
                
                <div className='map-div'>
                    <EnvelopeOpen size={20} />
                    <a href="mailto:abisolahamidat@gmail.com"><p>abisolahamidat@gmail.com</p></a>
                </div>
            </div>
            <div className='social-div'>
                <FacebookLogo size={25} color='white'/>
                <WhatsappLogo size={25} color='white'/>
            </div>
            
        </div>
    </div>
  )
}

export default Topbar
