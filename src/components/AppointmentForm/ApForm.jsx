import React, {useState} from 'react'
import './ApForm.css'
import {User, Phone, Envelope} from 'phosphor-react'
import CustomInput from '../customInput/CustomInput'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ApForm() {

    const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='form-container' id='contact'>
      <div className='form-con'>
        <h1>Make a Request</h1>
        <h3>You can book an appointment by clicking on this link or filling the form</h3>
        <div className='link-div'>
            <a href="https://wa.me/08163764664" ><h2 style={{color:"#49c02b"}}>08163764664</h2></a>
            <a href="mailto:abisolahamidat@gmail.com"><h2 style={{color:"#49c02b"}}>abisolahamidat@gmail.com</h2></a>
        </div>
        <form>
            <section>
                <div className='first-inp'>
                    <div className="input-div">
                        <CustomInput title="Your name" type="text" style={{backgroundColor:"beige"}}/>
                        <User size={32} color="#49c02b"/>
                    </div>
                    <div className="input-div">
                        <CustomInput title="number" type="text" style={{backgroundColor:"beige"}}/>
                        <Phone size={32} color="#49c02b"/>
                    </div>
                    <div className="input-div">
                        <CustomInput title="email" type="text" style={{backgroundColor:"beige"}}/>
                        <Envelope size={32} color="#49c02b"/>
                    </div>
                    <div className="input-div">
                        <DatePicker 
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)} 
                        showTimeSelect
                        dateFormat="Pp"
                        />
                        <h3 style={{color:"#49c02b"}}>Date</h3>
                    </div>
                    <div className="input-div">
                        <select>
                            <option selected="disabled">Request</option>
                            <option>Painting</option>
                            <option>Maintenance</option>
                        </select>
                        <h3 style={{color:"#49c02b"}}>Request</h3>
                    </div>
                    <div className="input-div">
                        <CustomInput title="Car Model" type="text" style={{width:"220px", backgroundColor:"beige"}}/>
                        <h3 style={{color:"#49c02b"}}>model</h3>

                    </div>
                    <div className="input-div">
                        <CustomInput title="model year" type="text" style={{backgroundColor:"beige"}}/>
                        {/* <Phone size={32} color="#49c02b"/> */}
                    </div>
                    <button className="input-div2">
                        MAKE AN APPOINTMENT
                    </button>
                </div>
            </section>
        </form>
      </div>
    </div>
  )
}

export default ApForm
