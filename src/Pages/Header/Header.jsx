import React from "react";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";
import { HiLightningBolt, HiGift } from "react-icons/hi";

import './Header.css'


const Header = () => {
    return (
        <>
            <Layout>
                <section className="container mx-auto mt-10">
                    <div>
                        <div className="flex items-center">
                            <HiLightningBolt className="text-2xl text-gray-600" />
                            <p className="text-4xl font-bold text-black">Categories</p>
                        </div>
                        <ul className="p-3 md:mt-5 mt-2 categories md:grid-cols-1 grid grid-cols-2">
                            <Link className="flex items-center gap-2">
                                <HiGift className="text-violet-400" />
                                <li>Trending</li>
                            </Link>
                            <Link className="flex items-center md:mt-4 mt-2 gap-2">
                                <HiGift className="text-red-400" />
                                <li>All Fashion</li>
                            </Link>
                            <Link className="flex items-center md:mt-4 mt-2 gap-2">
                                <HiGift  className="text-green-400"/>
                                <li>Men Fashion</li>
                            </Link>
                            <Link className="flex items-center md:mt-4 mt-2 gap-2">
                                <HiGift className="text-yellow-600" />
                                <li>Women Fashion</li>
                            </Link>
                            <Link className="flex items-center md:mt-4 mt-2 gap-2">
                                <HiGift className="text-violet-400" />
                                <li>Kid's Fashion</li>
                            </Link>
                            <Link className="flex items-center md:mt-4 mt-2 gap-2">
                                <HiGift />
                                <li>Gadget & Accessories</li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <div>
                                
                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Header;