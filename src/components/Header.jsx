import React from 'react'
import "./Header.css"
import Headimg from "./aldebaran-s-qtRF_RxCAo0-unsplash.jpg"

const Header = (props) => {
  return (
    <div className='header'>
        <img src={Headimg} alt={""} />
        <h1>
            {props.title}
        </h1>
        <h1 className='sub'>
          {props.subtitle}
        </h1>
    </div>
  )
}

export default Header