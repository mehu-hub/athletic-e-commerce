import React from 'react';
import Layout from '../../Layout/Layout';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <Layout>
            <div className='container border-t-indigo-500 p-5 mt-10 flex flex-col justify-center login-form shadow-xl border-4 border-blue-50 rounded 
            md:w-1/4 mx-auto'>
                <h2 className='text-6xl text-center font-bold'>Register </h2>
                <input className='border-2 border-gray-50 outline-none m-5 rounded p-2' placeholder='Your Name' type="email" required />
                <input className='border-2 border-gray-50 outline-none mx-5 rounded p-2' placeholder="Email" type="password" required />
                <input className='border-2 border-gray-50 outline-none mx-5 mt-5 rounded p-2' placeholder="Password" type="password" required />
                <input className='border-2 border-gray-50 outline-none mx-5 mt-5 rounded p-2' placeholder="Confirm Password" type="password" required />
                <input className='border-2 text-gray-400 border-gray-50 mt-5 outline-none mx-5 rounded p-2' placeholder="Date of Birth" type="date" required />
                <div className='flex gap-4 mt-5 mx-5'>
                    <div className='flex gap-2'>
                        <input type="radio" />
                        <p>Male</p>
                    </div>
                    <div className='flex gap-2'>
                        <input type="radio" />
                        <p>Female</p>
                    </div>
                    <div className='flex gap-2'>
                        <input type="radio" />
                        <p>Other</p>
                    </div>
                </div>

                <button className='bg-blue-800 m-5 py-2 text-white rounded'>Register</button>
                <p className='text-center text-blue-800'>Already Have an Account? <br /><Link to={'/login'}>Login now</Link></p>
            </div>
        </Layout>
    );
};

export default Signup;