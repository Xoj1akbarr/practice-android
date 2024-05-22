import React from 'react'
import './Navbar.css'
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className='Navbar'>
      <h1>Android</h1>


      <ul className='Navbar-li'>
        <li>Learn Android</li>
        <li>Entering Android</li>
        <li>About Android</li>
      </ul>
      <p className='search-icon'><FaSearch /></p>

      <button className='btn'>Buy phone</button>
    </div>
  )
}

export default Navbar
