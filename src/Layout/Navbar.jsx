import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/navbar.css'
import logo from '../Assets/images/logo.png'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='logo'>
                    <Link to={'/'}><img src={logo} alt="" /></Link>
                </div>
                <div>
                    <ul className='link-item'>
                        <li><Link className={window.location.pathname === '/men' ? "nav-active" : ''} to={'/men'}>Men</Link></li>
                        <li><Link className={window.location.pathname === '/women' ? "nav-active" : ""} to={'/women'}>Women</Link></li>
                        <li><Link className={window.location.pathname === '/kids' ? "nav-active" : ""} to={'/kids'}>Kids</Link></li>
                        <li><Link className={window.location.pathname === '/trending' ? "nav-active" : ""} to={'/trending'}>Trending</Link></li> 
                        <li><Link className={window.location.pathname === '/district' ? "nav-active" : ""} to={'/district'}>District</Link></li> 
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;