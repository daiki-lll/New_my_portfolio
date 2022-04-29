import React from 'react'
import "./Myname.css"


const Myname = (props) => {
  return (
    <div className='myname'>
        <p className='main'>
            {props.Myname}
        </p>
        <p className='sub'>
            {props.index}
        </p>
    </div>
  )
}

export default Myname