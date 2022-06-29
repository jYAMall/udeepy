
import React, {useState} from 'react'
import logo from './logo.svg';
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { AiOutlineClose} from 'react-icons/ai';
import { HiMenuAlt4} from 'react-icons/hi';


export const Menu = () => {

    const [state, setState] = useState ('home');

    const onUpdateState = (value) => {
        setState(value);
      }
    
    const [toggleMenu, setToggleMenu] =useState(false);

    const NavBarItem = ({ title, classProps }) => {
        return (
            <li className={`mx-4 cursor-pointer ${classProps}`}>
                {title}
            </li>
        );
    }

    return (
        
        <div className='flex  menu justify-between text-justify'>
            
                <img src={logo} alt="logo" className='svgimg flex '/>

                <ul className="nav  justify-content-center w-full md:justify-center md:flex hidden justify-between items-center p-4 ">
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

                <a className='button-social md:flex hidden' href='#home'><BsGithub/></a>
                <a className='button-social md:flex hidden' href='#home'><BsLinkedin/></a>
                <a className='button-social md:flex hidden' href='#home'><BsFacebook/></a>

                <div className='flex relative'>
                {toggleMenu
                ? <AiOutlineClose className='toggle text-white md:hidden cursor-pointer' onClick={() => setToggleMenu (false)} />
                : <HiMenuAlt4 className='toggle text-white md:hidden cursor-pointer' onClick={() => setToggleMenu (true)}/>
                }
                {toggleMenu && (
                    <ul
                        className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                            flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in'
                    >
                        
                        {[
                            
                            <ul className="text-center">
                                <li className="nav-item py-8 ">
                                    <a className={state === 'home' ? 'active nav-link' : 'nav-link'} onClick={() => onUpdateState('home')} href="#home"><p>Home</p></a>
                                </li>
                                <li className="nav-item py-8">
                                    <a className={state === 'services' ? 'active nav-link' : 'nav-link'} onClick={() => onUpdateState('services')} href="#services"><p>Services</p></a>
                                </li>
                                <li className="nav-item py-8">
                                    <a className={state === 'works' ? 'active nav-link' : 'nav-link'} onClick={() => onUpdateState('works')} href="#works"><p>Works</p></a>
                                </li>
                                <li className="nav-item py-8">
                                    <a className={state === 'contacts' ? 'active nav-link' : 'nav-link'} onClick={() => onUpdateState('contacts')} href="#contacts"><p>Contacts</p></a>
                                </li>
                            </ul>

                        ].map((item, index) => (
                            <NavBarItem key={item + index} title={item} classProps='my-2 text-lg'/>
                        ))} 
                            <div className='flex py-8'>
                                <nav className='button-social-m mx-8' href='#home'><BsGithub/></nav>
                                <nav className='button-social-m mx-8' href='#home'><BsLinkedin/></nav>
                                <nav className='button-social-m mx-8' href='#home'><BsFacebook/></nav> 
                            </div>
                    </ul>
                )}
            </div>
                

        </div>
    )
    }

