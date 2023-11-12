import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo-blue.png'

const Navbar = () => {
    return (
        <div className="h-[80px] shadow-lg flex">
            <div className="container mx-auto flex justify-around items-center">
                <div>
                    <Link><img className='w-36' src={logo} alt="" /></Link>
                </div>
                <div>
                    <ul className="flex gap-8">
                        <Link className="font-semibold" to={'/'}>Home</Link>
                        <div className='border-r-2 border-gray-300'>
                        </div>

                        <Link className="font-semibold" to={'/shop'}>Shop</Link>
                        <div className='border-r-2 border-gray-300'>
                        </div>

                        <Link className="font-semibold" to={'/about'}>About</Link>
                        <div className='border-r-2 border-gray-300'>
                        </div>

                        <Link className="font-semibold" to={'/contact'}>Contact</Link>
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