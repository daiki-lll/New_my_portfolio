import React from 'react'
import "./About.css"
import Image from "./church-window-1016443.jpg";
import { Fade } from 'react-reveal';

const About = () => {
  return (
    <div className='aboutme'>
      <Fade bottom cascade>
        <img src={Image} alt={""}/>
        <p>及川大暉（おいかわだいき）<br/>岩手県在住の商業高校生。飽き性で新しい物好きな人です。</p>
      </Fade>
    </div>
  )
}

export default About