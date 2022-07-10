import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div> 
          <Link to="/homepage"><button className='nav-buttons'>Home</button></Link>
          <Link to="/about"><button className='nav-buttons'>About</button></Link>
          <Link to="/library"><button className='nav-buttons'>Library</button></Link>
          <Link to="/account"><button className='nav-buttons'>Account</button></Link>
        </div>
    </div>
  )
}

export default Navbar