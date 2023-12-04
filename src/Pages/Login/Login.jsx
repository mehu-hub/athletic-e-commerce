import React from 'react';
import Layout from '../../Layout/Layout';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Layout>
            <div className='container h-[500px] p-5 mt-10 flex flex-col justify-center login-form shadow-xl border-2 border-blue-50 rounded w-1/4 mx-auto'>
                <h2 className='text-6xl text-center font-bold'>Login </h2>
                <input className='border-2 border-gray-50 outline-none m-5 rounded p-2' placeholder='Email Address' type="email" required />
                <input className='border-2 border-gray-50 outline-none mx-5 rounded p-2' placeholder="Password" type="password" required />
                {/* <p className='m-5 mb-0 mt-2 text-[15px] text-red-300'>Forgot Password?</p> */}
                <button className='bg-blue-800 m-5 py-2 text-white rounded'>Login</button>
                <p className='text-center text-blue-800'>Not a member? <Link to={'/signup'}>Signup now</Link></p>
            </div>
        </Layout>
    );
};

export default Login;