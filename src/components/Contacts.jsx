import React from 'react'
import {MdPlace} from "react-icons/md";
import {MdOutlineEmail}from "react-icons/md";
import {MdPhone}from "react-icons/md";

function Contacts() {
  return (
    <section id='contacts' className='box bg4 '>
        <div className='md:grid gap-4 grid-cols-2 cont absolute '>
          <div className='pt-7 '>
            <div className='contleft'>
                  <MdPhone className='icons'/> +380968650300
            </div>
            <div className='contleft'>
                  <MdOutlineEmail className='icons'/> info@udeepy.com
            </div>
            <div className='contleft'>
                  <MdPlace className='icons'/> Kyiv, Ukraine
            </div>
          </div>
          <div className='mx-8'>
                        <label>Name</label>
                        <input type="text" placeholder='Enter your name' />
                    
                        <label>Email</label>
                        <input type="email" placeholder='Enter your email' />
                    
                        <label>Message</label>
                        <textarea cols="30" rows="15" placeholder='Enter your message'></textarea>
                    
                    <div className="bottom">
                      <button className='bt'>Submit</button>
                    </div>
          </div>
        </div>
    </section>
  )
}

export default Contacts

