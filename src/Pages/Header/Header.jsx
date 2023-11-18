import React from "react";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";
import { HiLightningBolt, HiGift } from "react-icons/hi";
import Banner1 from '../../Assets/Header/banner-1.jpg'
import Menmodel from '../../Assets/Header/man-model.jpg'
import WoMenmodel from '../../Assets/Header/women-model.jpg'
import Banner2 from '../../Assets/Header/banner-2.jpg'
import { Carousel } from "keep-react";

import './Header.css'


const Header = () => {
    return (
        <>
            <Layout>
                <section className="container mx-auto mt-10 md:flex gap-10">
                    <div className="md:w-[15%]">
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
                                <HiGift className="text-green-400" />
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
                    <div className="md:w-[85%] md:flex flex-col ">
                        <div className="md:flex gap-5 ">
                            <div className="md:w-[60%]">
                                <Carousel indicatorsType="ring" className="h-full" indicators={true}>
                                    <img
                                        src="https://img.freepik.com/free-photo/brutal-man-with-phone_1303-9214.jpg?w=1380&t=st=1700274588~exp=1700275188~hmac=67b83c45c861cf7a4c3440ccfbde4887ed6d6fc67b679ca3f5107fcdb97f29e2"
                                        alt="slider-4"
                                    />
                                    <img
                                        src="https://img.freepik.com/free-photo/group-beautiful-girls-boys_155003-8333.jpg?w=1380&t=st=1700274699~exp=1700275299~hmac=16e4a40bc2fafdb43e20de9ffbfaaa1bee5df50c2ee450781e659aa72b32c3a8"
                                        alt="slider-2"
                                    />
                                    <img
                                        src="https://img.freepik.com/premium-photo/upper-class-woman-fashionable-woman-texting-outdoors-fashion-woman-sunglasses-pink-jacket-with-coffee_153585-118.jpg"
                                        alt="slider-1"
                                    />
                                </Carousel>
                            </div>
                            <div className="flex md:w-[40%] md:mt-0 mt-5 gap-5">
                                <div className="w-[100%] rounded-lg bg-green-200">
                                    <img className="rounded-lg h-full" src={Menmodel} alt="" />
                                </div>
                                <div className="w-[100%] rounded-lg bg-green-200">
                                    <img className="h-full w-full rounded-lg" src={WoMenmodel} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Header;