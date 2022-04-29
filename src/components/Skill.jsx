import React from 'react'
import "./Skill.css"

const Skill = (props) => {
  return (
    <div className='skill'>
        <p>
            {props.skill}
        </p>
    </div>
  )
}

export default Skill