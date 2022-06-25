import React from 'react'
import logo from './logo.svg';

function Menu() {
  return (
    
    <div className='blue-glassmorphism menu flex justify-between text-justify text-black'>
        
            <img src={logo} alt="logo" className='svgimg'/>

            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#services">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#works">Works</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#contacts">Contacts</a>
                </li>
            </ul>
            

    </div>
  )
}

export default Menu