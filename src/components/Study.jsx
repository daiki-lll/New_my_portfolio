import React from 'react'
import "./Study.css"


const Study = (props) => {
  return (
    <div className='study'>
      <img src={props.simg} alt={""} />
      <p className='stitle'>
        {props.stitle}
      </p>
      
      <p className='index'>
        {props.index}
      </p>
    </div>
  )
}

export default Study