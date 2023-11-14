import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo-blue.png'
import { BsBorderWidth } from 'react-icons/bs';
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="shadow-md" id="#header">
            <div className="container mx-auto ">
                <div className="container mx-auto flex nav justify-between items-center">
                    <a href="#header">
                        <Link to={'/'}><img className='w-[120px]' src={logo} alt="" /></Link>
                    </a>
                    <div className="Navbar ">
                        <div className={`nav-items ${isOpen && "open"}`}>
                            <Link to={'/'}><a href="#about">Home</a></Link>
                            <Link to={'/shop'}><a href="#about">Shop Now</a></Link>
                            <Link to={'/about'}><a href="#about">About</a></Link>
                            <Link to={'/contact'}><a href="#about">Contact</a></Link>
                            <Link to={'/blogs'}><a href="#about">Blog's</a></Link> 
                        </div>
                        <div
                            className={`nav-toggle ${isOpen && "open"}`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className="bar"><BsBorderWidth/></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;