import React from 'react'
import "./NavBottun.css";

const NavBottun = (props) => {
  return (
      <div className='navbottun'>
        <p>
          {props.name}
        </p>
      </div>
  )
}

export default NavBottun