import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        country: ''
    })
    const [Error, setError] = useState('')
    const [Success, setSuccess] = useState('')
    const [token,setToken] = useState('')
    const navigate = useNavigate()
    const BASEURL = import.meta.env.VITE_BACKEND_URL

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        try{
            let response = await axios.post(`${BASEURL}/api/auth/signin`,formData,{
                headers: { "Content-Type": "application/json" },
            })

            if(response.status===200){
                setSuccess(response.data.message)
                console.log(response.data.token)
                setError('')                
                setTimeout(() => {
                    navigate(`/${formData.name}/dashboard`)
                }, 1500);
            }
           

        }catch(err){
            console.log(err)
            if (err.response && err.response.status === 400) {
                setError(err.response.data.message);
                setSuccess('')
            } else {
                setError("An unexpected error occurred. Please try again.");
                setSuccess('')
            }
        }
    }


    const handleGoogleSignIn = () => {
        // Logic to trigger Google sign-in (e.g., NextAuth signIn('google'))
        console.log("Sign in with Google");
    };

    const handleGithubSignIn = () => {
        // Logic to trigger Github sign-in (e.g., NextAuth signIn('github'))
        console.log("Sign in with Github");
    };

    return (
        <>
            <Navbar />
            <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">
                <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
                    <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Sign In</h2>

                    {/* Email and Password form */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* username */}
                        <div className="text-center text-red-400">{Error}</div>
                        <div className="text-center text-green-400">{Success}</div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                type="username"
                                name="name"
                                onChange={handleChange}
                                value={formData.name}
                                required
                                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="username"
                            />
                        </div>

                        {/* email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                                required
                                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={formData.password}
                                required
                                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* country */}
                        <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Country
                            </label>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            >
                                <option value="">Select your country</option>
                                <option value="USA">United States</option>
                                <option value="India">India</option>
                                <option value="Canada">Canada</option>
                                <option value="UK">United Kingdom</option>
                                <option value="Australia">Australia</option>
                                {/* Add more countries as needed */}
                            </select>
                        </div>

                        {/* button */}
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Sign in
                            </button>
                        </div>

                        <span className="block text-center">Already Have An Account? <Link to='/login' className="underline text-blue-400">Login</Link></span>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center">
                        <div className="h-px flex-grow bg-gray-300"></div>
                        <span className="mx-4 text-gray-400">or continue with</span>
                        <div className="h-px flex-grow bg-gray-300"></div>
                    </div>

                    {/* OAuth Providers */}
                    <div className="flex flex-col gap-4">
                        <button
                            onClick={handleGoogleSignIn}
                            className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
                        >
                            <FcGoogle className="mr-2 h-5 w-5" />
                            Sign in with Google
                        </button>

                        <button
                            onClick={handleGithubSignIn}
                            className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
                        >
                            <FaGithub className="mr-2 h-5 w-5" />
                            Sign in with GitHub
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
