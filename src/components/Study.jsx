import React from 'react'
import "./Study.css"
import { Fade } from 'react-reveal'


const Study = (props) => {
  return (
    <div className='study'>
      <Fade bottom cascade>
        <img src={props.simg} alt={""} />
        <p className='stitle'>
          {props.stitle}
        </p>
      
        <p className='index'>
          {props.index}
        </p>
      </Fade>
    </div>
  )
}

export default Study