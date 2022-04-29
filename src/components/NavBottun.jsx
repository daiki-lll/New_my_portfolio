import React from 'react'
import "./NavBottun.css";

const NavBottun = (props) => {
  return (
      <div className='navbottun'>
        <a href="">
          {props.name}
        </a>
      </div>
  )
}

export default NavBottun