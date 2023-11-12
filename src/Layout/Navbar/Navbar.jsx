import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo-blue.png'
import { BsSearch } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className="h-[80px] shadow-lg flex">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex ">
                    <Link to={'/'}><img className='w-36' src={logo} alt="" /></Link>
                </div>

                <div className="flex w-1/4 items-center gap-2">
                    <BsSearch/>
                    <input className="outline-none  p-2 border-l-2 border-indigo-50" type="search" placeholder="search your product" />
                </div>
                <i className="ri-search-line text-black"></i>
                <div>
                    <ul className="flex gap-5">
                        <Link className="font-semibold" to={'/'}>Home</Link>
                        <div className='border-r-2 border-gray-300'>

                        </div>

                        <Link className="font-semibold" to={'/shop'}>Shop Now</Link>
                        <div className='border-r-2 border-gray-300'>
                        </div>

                        <Link className="font-semibold" to={'/about'}>About Us</Link>
                        <div className='border-r-2 border-gray-300'>
                        </div>

                        <Link className="font-semibold" to={'/contact'}>Contact Us</Link>
                        <div className='border-r-2 border-gray-300'>
                        </div>

                        <Link className="font-semibold" to={'/blogs'}>Blog's</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;