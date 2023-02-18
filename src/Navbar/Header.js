import React, { useState,useEffect } from 'react'
import '../NavCss/header.css'

function Header() {
  const [hide,setHide]=useState(true)
  const [width,setWidth]=useState(window.innerWidth)
  useEffect(()=>{
    if(width>=390){
      setHide(false)
    }
  })
  const Action=()=>{
    setHide(p=>!p)
    
  }
  return (
    <div>
      <div className="header">
        <div className="nav">
          <ul style={{opacity: hide && "0%"}}>
            <li className='active'>HOME</li>
            <li>POST</li>
            <li>CONTACT</li>
            <li>HELP</li>
          </ul>
          <li className='hide' onClick={Action}>{hide ? <p>=</p>:<p>x</p>}</li>
        </div>
      </div>
    </div>
  )
}

export default Header
