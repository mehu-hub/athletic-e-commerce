import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    let [errorList, setErrorList] = useState([]);
    

    const [isPasswordMatched, setIsPasswordMatched] = useState(0);

    useEffect(() => {

        if (password !== confirmPassword) {
            setIsPasswordMatched(1);
        }
        if (password === confirmPassword && confirmPassword?.length > 5) {
            setIsPasswordMatched(2);
        }

    }, [confirmPassword])

    const [nameError, setNameError] = useState('');

    const signUp = (e) => {
        e.preventDefault();

        let isValidated = true;

        if (name.length < 3) {
            isValidated = false;
            setNameError('Name required from frontend')
            // console.log('ksjsdkj');
        }
        else {
            setNameError('')
        }

        if (isValidated) {

            var signUpData = {
                customer_name: name,
                customer_password: password,
                customer_password_confirmation: confirmPassword,
                customer_email: email,
                customer_dob: dob,
                customer_contact: phone,
                customer_gender: gender,
            };

            axios.post("register-customer", signUpData)
                .then(response => {
                    console.log(response);
                    if (response?.data?.success_message) {
                        // Toaster('Registration Successful', 'success');
                        navigate('/login', { replace: true });
                    }
                    else {
                        // Toaster("Something went wrong", 'error');
                        setErrorList(response.data.message);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
        else {
            // Toaster('Please fill up the form with correct data', 'warn')
        }
    }

    return (
        <Layout>
            <form method="post" onSubmit={(e) => signUp(e)}>
                <div className='container border-t-indigo-500 p-5 mt-10 flex flex-col justify-center login-form shadow-xl border-4 border-blue-50 rounded 
            md:w-1/4 mx-auto'>
                    <h2 className='text-6xl text-center font-bold'>Register </h2>
                    <input
                        value={name} onChange={(e) => setName(e.target.value)}
                        className='border-2 border-gray-50 outline-none m-5 rounded p-2' placeholder='Your Name' type="name" required />
                    {errorList && <span className=" text-red-600">{errorList?.customer_name}</span>}
                    {nameError && <span className=" text-red-600">{nameError}</span>}


                    <input
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        className='border-2 border-gray-50 outline-none mx-5 rounded p-2' placeholder="Email" type="email" required />
                    {errorList && <span className=" text-red-600">{errorList?.customer_email}</span>}


                    <input
                        value={phone} onChange={(e) => setPhone(e.target.value)}
                        className='border-2 border-gray-50 outline-none mx-5 mt-5 rounded p-2' placeholder="Phone" type="number" required />
                    {errorList && <span className=" text-red-600">{errorList?.customer_contact}</span>}


                    <input
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        className='border-2 border-gray-50 outline-none mx-5 mt-5 rounded p-2' placeholder="Password" type="password" required />
                    {errorList && <span className=" text-red-600">{errorList?.customer_password}</span>}


                    <input
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                        className='border-2 border-gray-50 outline-none mx-5 mt-5 rounded p-2' placeholder="Confirm Password" type="password" required />
                    {isPasswordMatched === 1 && <span className=" text-red-600 ml-5 mt-2">Password not matched</span>}
                    {isPasswordMatched === 2 && <span className=" text-green-600 ml-5 mt-2">Password matched</span>}
                    {errorList && <span className=" text-red-600">{errorList?.customer_password_confirmation}</span>}


                    <input
                        value={dob} onChange={(e) => setDob(e.target.value)}
                        className='border-2 text-gray-400 border-gray-50 mt-5 outline-none mx-5 rounded p-2' placeholder="Date of Birth" type="date" required />
                    {errorList && <span className=" text-red-600">{errorList?.customer_dob}</span>}


                    <div className='flex gap-4 mt-5 mx-5'>
                        <div value={"male"} onChange={(e) => setGender(e.target.value)} className='flex gap-2'>
                            <input type="radio" />
                            <p>Male</p>
                        </div>
                        <div value={"female"} onChange={(e) => setGender(e.target.value)} className='flex gap-2'>
                            <input type="radio" />
                            <p>Female</p>
                        </div>
                        <div value={"other"} onChange={(e) => setGender(e.target.value)} className='flex gap-2'>
                            <input type="radio" />
                            <p>Other</p>
                        </div>
                    </div>

                    <button className='bg-blue-800 m-5 py-2 text-white rounded'>Register</button>
                    <p className='text-center text-blue-800'>Already Have an Account? <br /><Link className='text-red-800 hover:underline' to={'/login'}>Login now</Link></p>
                </div>
            </form>

        </Layout>
    );
};

export default Signup;