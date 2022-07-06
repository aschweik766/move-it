import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/exercises">
        <div> Nav bar 
          <button>Home</button>
          <button>About</button>
          <button>Library</button>
          <button>Account</button>
        </div>
      </Link>
    </div>
  )
}

export default Navbar