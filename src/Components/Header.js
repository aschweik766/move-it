import React from 'react'
import Navbar from './Navbar'


const Header = () => {
  return (
    <div className='header'>
      {/* <img className='background-image' src='https://cdn.pixabay.com/photo/2017/08/07/10/20/canyon-2602307_1280.jpg'/> */}
        <h1 className='title'>Move It</h1>
        <h5 className='motto'> An intuitive HEP library for PTs</h5>
        <Navbar/>
    </div>
  )
}

export default Header