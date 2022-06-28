
import React, {useState} from 'react'
import logo from './logo.svg';
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';

export const Menu = () => {

    const [state, setState] = useState ('home');

    const onUpdateState = (value) => {
        setState(value);
      }
        

    return (
        
        <div className='flex  menu justify-between text-justify'>
            
                <img src={logo} alt="logo" className='svgimg flex '/>

                <ul className="nav justify-content-center w-full flex md:justify-center justify-between items-center p-4 ">
                    <li className="nav-item">
                        <a className={state === 'home' ? 'active nav-link' : 'nav-link'} onClick={() => onUpdateState('home')} href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className={state === 'services' ? 'active nav-link' : 'nav-link'} onClick={() => onUpdateState('services')} href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className={state === 'works' ? 'active nav-link' : 'nav-link'} onClick={() => onUpdateState('works')} href="#works">Works</a>
                    </li>
                    <li className="nav-item">
                        <a className={state === 'contacts' ? 'active nav-link' : 'nav-link'} onClick={() => onUpdateState('contacts')} href="#contacts">Contacts</a>
                    </li>
                </ul>

                <nav className='button-social' href='#home'><BsGithub/></nav>
                <nav className='button-social' href='#home'><BsLinkedin/></nav>
                <nav className='button-social' href='#home'><BsFacebook/></nav>
                

        </div>
    )
    }

