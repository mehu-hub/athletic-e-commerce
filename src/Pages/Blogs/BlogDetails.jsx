import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetails = () => {
    const [blogDetails, setBlogDetails] = useState();

    const { slug } = useParams();

    // console.log(slug);

    useEffect(() => {

        axios.get('blog/' + slug)
            .then(response => {
                console.log(response);
                if (response.data.success) {

                    setBlogDetails(response.data.data);
                }
            })

    }, [])
    return (
        <Layout>
            <div className='container mx-auto mb-5'>
                <h2 className=" text-gray-400 font-bold text-6xl mt-5">Blog's Details</h2>

                {blogDetails && (

                    <div className="bg-violet-50 p-5 rounded mt-10 product_details md:w-2/4">
                        <img src={blogDetails.image} className="w-full" alt={blogDetails.alter_txt} />
                        <h2 className="text-4xl font-bold">{blogDetails.title}</h2>
                        <p>${blogDetails.description}</p>
                    </div>
                )}
            </div>

        </Layout>
    );
};

export default BlogDetails;