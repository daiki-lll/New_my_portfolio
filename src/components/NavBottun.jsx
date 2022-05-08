import React from 'react'
import "./NavBottun.css";
import ReturnTop from "./scroll/Top"

const NavBottun = (props) => {
  return (
      <div className='navbottun'>
        <p onClick={ReturnTop}>
          {props.name}
        </p>
      </div>
  )
}

export default NavBottun