import React from 'react'
import logo from './logo.svg';

function Menu() {
  return (
    
    <div className='flex blue-glassmorphism menu justify-between text-justify text-black'>
        
            <img src={logo} alt="logo" className='svgimg flex'/>

            <ul class="nav justify-content-center w-full flex md:justify-center justify-between items-center p-4 ">
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