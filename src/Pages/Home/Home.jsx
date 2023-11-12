import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { Carousel } from "keep-react";
import Cover from '../../Assets/images/Cover.jpg'
import axios from "axios";

const Home = () => {
    const [settings, setSettings] = useState();

    useEffect(() => {

        axios.get('settings?platform=web')
            .then(response => {
                // console.log(response.data);
                setSettings(response.data);
            })

    }, [])
    return (
        <>
            <Layout>
                <div className="container mx-auto md:flex gap-5 mt-5 h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel className="w-[70%]" indicatorsType="ring" indicators={true}>
                        {settings?.hompageBanner.map((banner, index) => {
                            return (
                                <div>
                                    <img
                                        src={Cover}
                                        alt="slider-1"
                                        className="h-[500px] w-[100%]"
                                    />
                                </div>
                            )
                        })}
                    </Carousel>
                    <div className="w-[30%]">
                        <Carousel
                            showControls={false}
                            indicatorsType="ring"
                            indicatorsTypeColors="slate"
                        >
                            <img
                                src="https://img.freepik.com/free-psd/exclusive-sneakers-social-media-post-template-design_505751-4682.jpg?w=826&t=st=1699817031~exp=1699817631~hmac=1908ea00ab5f308afbf991d2df1c2eaa5c760a43a85a01036bc1953faaaea0b7"
                                alt="slider-1"
                                height={384}
                                width={440}
                            />
                            <img
                                src="https://img.freepik.com/free-photo/new-smartwatch-balancing-with-hand_23-2150296477.jpg?w=826&t=st=1699816516~exp=1699817116~hmac=c5ff88a38d3687334a843210c0f3e3974d35dcd6331b34d98aaa69895024b290"
                                alt="slider-2"
                                height={384}
                                width={440}
                            />
                            <img
                                src="https://img.freepik.com/free-photo/headphones-balancing-with-blue-background_23-2150271756.jpg?w=826&t=st=1699816977~exp=1699817577~hmac=82014de4c1592494920b0d1af476123aa7a61737785e7fc92f4b082a9fd66f42"
                                alt="slider-3"
                                height={384}
                                width={440}
                            />
                        </Carousel> 
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Home;