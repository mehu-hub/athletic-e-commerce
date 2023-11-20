import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../Assets/images/logo.png'

const Footer = () => {
    return (
        <div className='mt-10 p-10 bg-blue-800 '>
            <footer className="footer container mx-auto items-center text-white">
                <aside>
                    <img src={footerLogo} className='w-[150px]' alt="" />
                    <p>ATLC e-Commerce<br />Best ecommerce in Bangladesh</p>
                </aside>
                <nav className=''>
                    <header className="footer-title">Products</header>
                    <Link className="text-gray-200 p-0 link link-hover">Men Fashion</Link>
                    <Link className="text-gray-200 p-0 link link-hover">Women Fashion</Link>
                    <Link className="text-gray-200 p-0 link link-hover">Kids Fashion</Link>
                    <Link className="text-gray-200 p-0 link link-hover">Accessories</Link>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link className="text-gray-200 p-0 link link-hover">About us</Link>
                    <Link className="text-gray-200 p-0 link link-hover">Contact</Link>
                    <Link className="text-gray-200 p-0 link link-hover">Jobs</Link>
                    <Link className="text-gray-200 p-0 link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <form>
                        <header className="footer-title">Get Update</header>
                        <fieldset className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-200">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="your@gmail.com" className="input input-bordered join-item" />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;