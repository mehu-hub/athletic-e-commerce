import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { Carousel } from "keep-react";
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
                <div className="container mx-auto mt-5 h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel indicatorsType="ring" indicators={true}>
                        {settings?.hompageBanner.map((banner, index) => {
                            return (
                                <div>
                                    <img
                                        src={banner.banner_image}
                                        alt="slider-1" 
                                        className="h-[800px] w-[100%]"
                                    /> 
                                </div>
                            )
                        })}
                        {/* <img
                            src="https://images.prismic.io/staticmania/ecd45179-4b86-4a34-b245-0078e022db5a_1.png?auto=compress,format"
                            alt="slider-1"
                            height={400}
                            width={910}
                        />
                        <img
                            src="https://images.prismic.io/staticmania/dee3ff09-3ddc-4340-bc8f-ea0028bb4a61_2.png?auto=compress,format"
                            alt="slider-2"
                            height={400}
                            width={910}
                        />
                        <img
                            src="https://images.prismic.io/staticmania/a5c7143d-24dd-4531-9f00-243f4eb27e28_3.png?auto=compress,format"
                            alt="slider-3"
                            height={400}
                            width={910}
                        /> */}
                    </Carousel>
                </div>
            </Layout>
        </>
    )
}

export default Home;