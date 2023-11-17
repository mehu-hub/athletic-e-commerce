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
                    <div className="md:w-[20%]">
                        <div className="flex items-center">
                            <HiLightningBolt className="text-2xl text-gray-600" />
                            <p className="text-4xl font-bold text-black">Categories</p>
                        </div>
                        <ul className="md:mt-5 md:p-0 p-3 mt-2 gap-2 categories md:grid-cols-1 grid grid-cols-2">

                            <Link className="flex items-center gap-2 bg-blue-25	mt-2 rounded p-2">
                                <HiGift className="text-violet-400" />
                                <li>Trending</li>
                            </Link>
                            <Link className="flex mt-2 items-center gap-2 bg-blue-25 rounded p-2">
                                <HiGift className="text-red-400" />
                                <li>All Fashion</li>
                            </Link>
                            <Link className="flex mt-2 items-center gap-2 bg-blue-25 rounded p-2">
                                <HiGift  className="text-green-400"/>
                                <li>Men Fashion</li>
                            </Link>
                            <Link className="flex mt-2 items-center gap-2 bg-blue-25 rounded p-2">
                                <HiGift className="text-yellow-600" />
                                <li>Women Fashion</li>
                            </Link>
                            <Link className="flex mt-2 items-center gap-2 bg-blue-25 rounded p-2">
                                <HiGift className="text-purple-600" />
                                <li>Kid's Fashion</li>
                            </Link>
                            <Link className="flex mt-2 items-center gap-2 bg-blue-25 rounded p-2">
                                <HiGift />
                                <li>Accessories</li>
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