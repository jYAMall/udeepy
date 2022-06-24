import React from 'react'
import logo from './logo.svg';

function Menu() {
  return (
    
    <div className='white-glassmorphism menu '>
        <div className='flex justify-between'>
            <img src={logo} alt="logo" className='svgimg'/>
            <a href='#home'>Home</a>
            <a href='#services'>Services</a>
            <a href='#works'>Works</a>
            <a href='#contacts'>Contacts</a>
        </div>
    </div>
  )
}

export default Menu