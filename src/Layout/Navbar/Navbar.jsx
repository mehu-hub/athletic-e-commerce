import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaSearch, FaStream, FaChevronRight, FaTelegramPlane } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import './Navbar.css'
import logo from "../../Assets/images/logo-blue.png"

const Navbar = () => {
    function showSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex'
    }
    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none'
    }
    return (
        <header>
            <div className='nav-bar'>
                <div className='container mx-auto p-3 text-[14px] flex items-center justify-between font-semibold text-gray-600'>
                    <div className='flex items-center gap-2'>
                        <FaTelegramPlane className='text-xl' />
                        <p>Express delivery and free returns within 7 days</p>
                    </div>
                    <div className='flex justify-start gap-10 items-center'>
                        <div className='flex items-center gap-2'>
                            <HiMail className='text-[18px]' />
                            <p>athleticshop@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <HiPhone className='text-[18px]' />
                            <p>+880 1310756941</p>
                        </div>
                    </div>
                </div>


                <hr />

                {/* Navigation menu start */}
                <nav className='container mx-auto nav-items-div'>
                    <ul className="sidebar">
                        <li onClick={hideSidebar}><Link><FaChevronRight /></Link></li>
                        <li className='flex justify-center items-center text-gray-400 border-b-2 border-blue-600'>
                            <FaSearch className='hideOnMobile' />
                            <input className='outline-none p-2 w-[400px]' type="search" placeholder='Search your products' />
                        </li>
                        <Link><li>Products</li></Link>
                        <Link><li>Men</li></Link>
                        <Link><li>Women</li></Link>
                        <Link><li>Kids</li></Link>
                        <Link>
                            <li className='flex text-xl gap-2 items-center'>
                                <FaCartPlus />
                                Cart
                            </li>
                        </Link>
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
                            <li className='flex text-xl gap-2 items-center hideOnMobile'>
                                <FaCartPlus />
                                Cart
                            </li>
                        </Link>
                        <Link><li onClick={showSidebar} className='menu-icon text-[25px]'><FaStream /></li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;