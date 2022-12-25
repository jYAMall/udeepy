import React from 'react';
import {AiOutlineDown} from "react-icons/ai";


function Header() {
  return (
    <section id='home' >
        <div className='box flex w-full justify-center items-center bg1'>
            <div className="md:flex items-center md:justify-between  pt-6 ">
                <div className="md:w-1/2 z-0 ">
                    <h1 className="text-[#d2cfdd] w-full font-Bellefair pb-2 text-4xl p-4">By joining forces, we can make a real difference in shaping the future</h1>
                    <h1 className="text-white w-full font-Bellefair pb-2 text-xl p-8 py-14">
                    We are a company that specializes in the development of blockchain solutions. Whether you are looking to launch your own cryptocurrency or want to build a decentralized application, we have the expertise to help you succeed.
                    </h1>
                    <button className='bt pt-14 mt-5' onClick={() => window.open('/consultation')}>Get a Consultation</button>
                </div>
            </div>
            <a className='button-down' href='#services' ><AiOutlineDown/></a>
        </div>
    </section>
  )
}

export default Header