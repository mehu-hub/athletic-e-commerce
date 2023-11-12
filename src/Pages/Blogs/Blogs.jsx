import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setblogs] = useState();

    useEffect(() => {
        axios.get('blogs')
            .then(res => {
                console.log(res.data)
                setblogs(res.data);
            })
    })
    return (
        <Layout>
            <h2 className="container mx-auto text-gray-400 font-bold text-6xl mt-5">Blog's</h2>
            <section>
                {blogs && blogs.map((blog, index) => {
                    return (
                        //to={`/blogs/${blog.slug}`} key={index}
                        <Link>
                            <div className="container mx-auto m-8 p-8 gap-8 flex shadow-lg border border-gray-200 rounded"> 
                                    <img src={blog.image} className="h-[200px]" width={250} alt="" /> 
                                <div>
                                    <h3 className="text-2xl font-bold">{blog.title}</h3>
                                    <p className="font-semibold text-gray-400">{blog.sub_title}</p>
                                    <button className="bg-green-400 py-2 px-5 rounded mt-5 text-white">Read More</button>
                                </div>
                                
                            </div>
                        </Link>
                    )
                })}
            </section>
        </Layout>
    );
};

export default Blogs;