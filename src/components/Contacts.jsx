import React from 'react'
import {MdPlace} from "react-icons/md";
import {MdOutlineEmail}from "react-icons/md";
import {MdPhone}from "react-icons/md";
import logo_svg from './logo-svg.svg';

const Contacts = () => {
  return (
    <div id='contacts' className='bg4 min-h-screen'>
        <div className=''>
        <div className=''>
        <div className='md:grid gap-4 grid-cols-2 cont absolute '>
          <div className='pt-7 '>
            <div className='contleft blue-glassmorphism'>
                  <MdPhone className='icons'/> +380968650300
            </div>
            <div className='contleft blue-glassmorphism'>
                  <MdOutlineEmail className='icons'/> info@udeepy.com
            </div>
            <div className='contleft blue-glassmorphism'>
                  <MdPlace className='icons'/> Kyiv, Ukraine
            </div>
          </div>
          <div className='mx-8'>
                        <label>Name</label>
                        <input className='blue-glassmorphism' type="text" placeholder='Enter your name' />
                    
                        <label>Email</label>
                        <input className='blue-glassmorphism' type="email" placeholder='Enter your email' />
                    
                        <label>Message</label>
                        <textarea className='blue-glassmorphism' cols="30" rows="15" placeholder='Enter your message'></textarea>
                    
                    <div className="bottom mt-5 mb-14 md:mt-14 ">
                      <button className='bt'>Submit</button>
                    </div>
          </div>
        </div>
        
          <div className="absolute bottom-5 left-5 ">
            <img className='svgimg flex' src={logo_svg} alt="Udeepy company logo" />
          </div>
          <div className="absolute bottom-1 md:bottom-6 left-0 right-0 text-[#0a0d16]">
            © 2020-2022 Udeepy. All rights reserved.
          </div>
          </div>
        </div>
    </div>
  );
}

export default Contacts;
