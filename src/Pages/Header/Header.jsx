import React from "react";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <>
            <Layout>
                <section className="container mx-auto mt-10">
                    <div>
                        <p className="text-4xl font-bold text-gray-600">Categories</p>
                        <ul className="mt-5 categories">
                            <Link><li>Trending</li></Link>
                            <Link><li>All Fashion</li></Link>
                            <Link><li>Men Fashion</li></Link>
                            <Link><li>Women Fashion</li></Link>
                            <Link><li>Kid's Fashion</li></Link>
                            <Link><li>Gadget & Accessories</li></Link>
                        </ul>
                    </div>
                    <div>

                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Header;