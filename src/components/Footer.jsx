import React from 'react'
import "./Footer.css"

const Footer = (props) => {
  return (
    <div className='footer'>
        <a href='https://github.com/daiki-lll'>{props.foot1}</a>
        <a href='https://www.instagram.com/daiki_.04'>{props.foot2}</a>
        <a href='https://open.spotify.com/user/wern4h8qisvr18iech41uy6k6?si=0d84961d4558481c'>{props.foot3}</a>
    </div>
  )
}

export default Footer