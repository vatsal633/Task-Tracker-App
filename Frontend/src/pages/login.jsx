import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const BASEURL = import.meta.env.VITE_BACKEND_URL

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try{
            let response = await axios.post(`${BASEURL}/api/auth/login`,formData,{
                headers: { "Content-Type": "application/json" },
            })

            console.log(response.data)
            
        }catch(err){
            console.log(err)
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
                    <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Log In</h2>

                    {/* Email and Password form */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        
                        

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

                        {/* button */}
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Sign in
                            </button>
                        </div>

                        <span className="block text-center">Don't Have An Account? <Link to='/signin' className="underline text-blue-400">Sign In</Link></span>
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

export default Login;
