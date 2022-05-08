import React from 'react'
import "./Skill.css"
import { Fade } from 'react-reveal'

const Skill = (props) => {
  return (
    <div className='skill'>
      <Fade bottom cascade>
        <p>
            {props.skill}
        </p>
      </Fade>
    </div>
  )
}

export default Skill