import React from 'react'
import './Footer.css'
import girl from '../../assets/No hair girl.webp' 

function Footer() {
  return (
    <div className='Footer'>
        <div className='pic'>
            <img src={girl} alt="" />
            <h2>WhatsApp for OS</h2>
            <h1>Android - This is freedomness</h1>
            <button>Be aware of news</button>
        </div>
      
    </div>
  )
}

export default Footer
