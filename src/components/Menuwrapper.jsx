import React from 'react'
import "./Menuwrapper.css"

const Menuwrapper = () => {
  return (
    <div className='wrapper'>
      <ul className='menu'>
        <li><p className='closeBt'>Close</p></li>
        <li><p>Study</p></li>
        <li><p>About me</p></li>
        <li><p>Skill</p></li>
        <li><p>Contact</p></li>
      </ul>
    </div>
  )
}

export default Menuwrapper