import React from "react";
import Navbar from "../Layout/Navbar";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
const About = () => {
    const {id} = useParams();
    return (
        <>
            <Layout>
                <h1>This is About Page: {id}</h1>
            </Layout>

        </>
    )
}
export default About;