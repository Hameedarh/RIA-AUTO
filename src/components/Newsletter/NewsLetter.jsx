import React from 'react'
import './Newsletter.css'
import {Envelope} from 'phosphor-react'
import CustomInput from '../customInput/CustomInput'
function NewsLetter() {
  return (
    <div className="News-container">
      <div className="News-cont">
        <h1>Subscribe Today For Newsletter</h1>
        <div>
            <div className="news-div">
                <CustomInput title="email" type="text" style={{backgroundColor:"whitesmoke"}}/>
                <Envelope size={32} color="rgb(52,152,219)"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
