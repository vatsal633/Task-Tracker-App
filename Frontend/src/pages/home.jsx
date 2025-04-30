import React from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/navbar"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to WorkSync</h1>
          <p className="text-gray-600 mb-8">
          Manage your daily tasks, track progress, and collaborate—all in one place.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/signin"
              className="rounded-md bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700"
            >
              Sign In
            </Link>
            <Link
              to="/login"
              className="rounded-md border border-indigo-600 px-6 py-2 text-indigo-600 hover:bg-indigo-50"
            >
             Log In
            </Link>
          </div>

          {/* Optional Features Section */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 text-left">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Task Management</h3>
              <p className="mt-2 text-sm text-gray-600">Easily create, update, and organize your tasks.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Progress Tracking</h3>
              <p className="mt-2 text-sm text-gray-600">Track task status and deadlines at a glance.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">OAuth Integration</h3>
              <p className="mt-2 text-sm text-gray-600">Sign in securely with Google or GitHub.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
