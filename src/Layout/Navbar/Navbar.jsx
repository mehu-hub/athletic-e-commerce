import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaSearch, FaStream  , FaChevronRight   } from "react-icons/fa";
import './Navbar.css'
import logo from "../../Assets/images/logo-blue.png"

const Navbar = () => {
    function showSidebar(){
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex'
    }
    function hideSidebar(){
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none'
    }  
    return (
        <header className="nav-bar">   
            <nav className='container mx-auto '>
                <ul className="sidebar">
                    <li onClick={hideSidebar}><Link><FaChevronRight  /></Link></li>
                    <li className='flex justify-center items-center text-gray-400 border-b-2 border-blue-600'>
                        <FaSearch className='hideOnMobile' />
                        <input className='outline-none p-2 w-[400px]' type="search" placeholder='Search your products' />
                    </li>
                    <Link><li>Products</li></Link>
                    <Link><li>Men</li></Link>
                    <Link><li>Women</li></Link>
                    <Link><li>Kids</li></Link>
                    <Link><li><FaUser /></li></Link>
                </ul>

                <ul>
                    <li><img className="md:w-[180px] logo" src={logo} alt="" /></li>
                    <li className='hideOnMobile flex justify-center items-center text-gray-400 border-b-2 border-blue-600'>
                        <FaSearch />
                        <input className='outline-none p-2 w-[400px]' type="search" placeholder='Search your products' />
                    </li>
                    <Link><li className='hideOnMobile'>Products</li></Link>
                    <Link><li className='hideOnMobile'>Men</li></Link>
                    <Link><li className='hideOnMobile'>Women</li></Link>
                    <Link><li className='hideOnMobile'>Kids</li></Link>
                    <Link>
                        <li className='flex items-center justify-center gap-2 hideOnMobile'>
                        <FaUser />
                        Login
                        </li>    
                    </Link>
                    <Link><li onClick={showSidebar} className='menu-icon text-[25px]'><FaStream /></li></Link>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;