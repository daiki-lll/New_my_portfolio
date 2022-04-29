import React from 'react'
import "./About.css"
import Image from "./church-window-1016443.jpg";

const About = (props) => {
  return (
    <div className='aboutme'>
      <img src={Image} alt={""}/>
      <p>{props.aboutText}</p>
    </div>
  )
}

export default About