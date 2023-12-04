import React, { useContext, useState } from 'react';
import Layout from '../../Layout/Layout';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../Components/Common/UserProvider';
import swal from 'sweetalert';
// import Toaster from '../../Components/Common/Toaster';

const Login = () => {

    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    let [errorMsg, setErrorMsg] = useState([]);

    const { userData, updateUserData } = useContext(UserContext);

    const login = (e) => {
        e.preventDefault();

        var loginData = {
            user_input: userName,
            password: password,
        };

        axios.post("customer/login", loginData)
            .then(response => {
                console.log(response);
                if (response?.data?.status) {
                    var userData = {
                        token: response?.data?.token,
                        id: response?.data?.data?.id,
                        name: response?.data?.data?.customer_name,
                        email: response?.data?.data?.customer_email,
                        phone: response?.data?.data?.customer_contact
                    }

                    localStorage.setItem("user", JSON.stringify(userData));

                    updateUserData(userData);

                    // Toaster('Loggedin Successfully', 'success')
                    swal({ 
                        text:"Login Successfully",
                        icon: "success"
                      });

                    navigate('/', { replace: true });

                    //   window.location.href='/'

                }
                if (response?.data?.success === false) {
                    // Toaster(response?.data?.message, 'error')
                    setErrorMsg(response?.data?.message);
                } 

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Layout>
            <form method='post' onSubmit={(e) => login(e)} className='container border-t-indigo-500 h-[500px] p-5 mt-10 flex flex-col justify-center login-form shadow-xl border-4 border-blue-50 rounded md:w-1/4 mx-auto'>
               
                <h2 className='text-6xl text-center font-bold'>Login </h2> 
                {errorMsg && <center><span className="text-red-600 my-6">{errorMsg}</span></center>}
                <input
                    value={userName} onChange={(e) => setUserName(e.target.value)}
                    className='border-2 border-gray-50 outline-none m-5 rounded p-2' placeholder='Email Address' type="email" required />
                <input
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    className='border-2 border-gray-50 outline-none mx-5 rounded p-2' placeholder="Password" type="password" required />


                <p className='m-5 mb-0 mt-2 text-[15px] text-red-300'>Forgot Password?</p>
                <button className='bg-blue-800 m-5 py-2 text-white rounded'>Login</button>
                <p className='text-center text-blue-800'>Not a member? <Link to={'/signup'}>Signup now</Link></p>
            </form>
        </Layout>
    );
};

export default Login;