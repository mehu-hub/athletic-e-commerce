import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaSearch, FaStream, FaChevronRight, FaTelegramPlane, FaHeart } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import './Navbar.css'
import logo from "../../Assets/images/logo-blue.png"
import { useCart } from 'react-use-cart';

const Navbar = () => {
    const { totalUniqueItems } = useCart();

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

                {/* Top Navigation Sub bar */}
                <div className='container hidden mx-auto p-3 text-[12px] md:flex items-center justify-between font-semibold text-gray-600'>
                    <div className='flex text-red-400 items-center gap-2'>
                        <FaTelegramPlane className='text-[15px]' />
                        <p>Express delivery and free returns within 7 days</p>
                    </div>
                    <div className='flex justify-around items-center gap-4 '>
                        <div className='flex items-center gap-2 text-red-400'>
                            <HiPhone className='text-[18px]' />
                            <p>+880 1310756941</p>
                        </div>
                        <div className='border-r-2 h-4 border-red-400'>

                        </div>
                        <div className='flex items-center gap-2 text-red-400'>
                            <Link to={'/login'}>Login</Link>
                            <Link to={'/signup'}>Signup</Link>
                        </div>
                    </div>
                </div>


                <hr />

                {/* Navigation menu start */}
                <nav className='container mx-auto nav-items-div'>
                    <ul className="sidebar">
                        <li onClick={hideSidebar}><Link><FaChevronRight /></Link></li>
                        <li className='flex items-center text-gray-400 rounded px-4 border border-blue-400'>
                            <FaSearch className='md:block hidden' />
                            <input className='outline-none p-2 w-[400px]' type="search" placeholder='Search your products' />
                        </li>
                        <Link className='mt-10'>
                            <li className='flex flex-col md:flex-row md:gap-10 '>
                                <Link className="flex w-full md:w-auto items-center gap-2 text-xl">
                                    <FaHeart />
                                    Wishlist
                                </Link>
                                <Link to={'/cart'} className="flex items-center gap-2 text-xl">
                                    <FaCartPlus />
                                    Cart
                                    <span>{totalUniqueItems}</span>
                                </Link>
                            </li>
                        </Link>
                        <Link className='mt-10 w-full'>
                            <li className='w-full bg-blue-400 p-2 rounded text-white text-center mt-2'>Login</li>
                        </Link>
                        <Link className='w-full'>
                            <li className='w-full bg-blue-200 p-2 rounded text-white text-center mt-2'>Signup</li>
                        </Link>
                    </ul>

                    <ul>
                        <li><a href="/"><img className="md:w-[150px] w-[120px]" src={logo} alt="" /></a></li>
                        <li className='hideOnMobile mr-10 flex items-center text-gray-400 rounded px-4 border-b-2 border-blue-400'>
                            <FaSearch />
                            <input className='outline-none p-2 w-[400px]' type="search" placeholder='Search your products' />
                        </li>

                        <li className='hideOnMobile flex'>
                            <Link className="flex items-center gap-2 text-[18px]">
                                <FaHeart />
                                <div className='flex gap-[5px]'>
                                    Wishlist
                                    <span>(0)</span>
                                </div>
                            </Link>
                            <Link to={'/cart'} className="flex items-center gap-2 text-[18px]">
                                <FaCartPlus />
                                <div className='flex gap-[5px]'>
                                    Cart
                                    <span>{totalUniqueItems}</span>
                                </div>
                            </Link>
                        </li>

                        <Link><li onClick={showSidebar} className='menu-icon text-[20px]'><FaStream /></li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;