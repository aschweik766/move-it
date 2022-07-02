import React from 'react'
import Navbar from './Navbar'


const Header = () => {
  return (
    <div className='header'>
        <h1 className='title'>MoveIt</h1>
        <h3> An intuitive HEP library for PTs</h3>
        <Navbar/>
    </div>
  )
}

export default Header