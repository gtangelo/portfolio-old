import React from 'react'
import './Button.css'

const BTN_CLASSES = ["btn-primary"]

const BTN_SIZES = ["btn-sm", "btn-md", "btn-lg"]

const Button = ({children, btnClass, btnSize, onClick}) => {
  btnClass = BTN_CLASSES.includes(btnClass) ? btnClass : BTN_CLASSES[0];
  btnSize = BTN_SIZES.includes(btnSize) ? btnSize : BTN_SIZES[1]

  return (
    <button className={`btn ${btnClass} ${btnSize}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
