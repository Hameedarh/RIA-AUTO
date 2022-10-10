import React from 'react'
import './CustomInput.css'

function CustomInput({title, type, ...OtherProps}) {
  return (
    <div className='custom-inp'>
      <input placeholder={title} type={type} {...OtherProps} />
    </div>
  )
}

export default CustomInput
