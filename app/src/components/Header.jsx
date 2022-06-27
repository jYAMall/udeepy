import React from 'react';
import rocketwoman from './rocket-woman.png';
import {AiOutlineDown} from "react-icons/ai";


function Header() {
  return (
    <section id='home'>
        <div className='box  flex w-full justify-center items-center bg1'>
            <div className="md:flex items-center md:justify-between  pt-6 ">
                <div className="md:w-1/2 ">
                    <h1 className="text-white w-full font-Bellefair pb-2 text-5xl p-4">We are always open to new projects and can turn any idea into reality. </h1>
                    <h1 className="text-white w-full font-Bellefair pb-2 text-3xl p-8 py-14">
                        Let's work together and make something meaningful.
                    </h1>
                </div>
                <img src={rocketwoman} className="md:w-[40%] w-[52%]  md:mx-5 mx-auto md:py-0 py-4" />
            </div>
            <a className='button-down' href='#services' ><AiOutlineDown/></a>
        </div>
    </section>
  )
}

export default Header