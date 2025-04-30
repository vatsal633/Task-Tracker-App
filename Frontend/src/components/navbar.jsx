import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-2xl">
      <div className="text-2xl font-bold text-blue-600">
        <Link to='/'>
        WorkSync
        </Link>
      </div>
      <div className="space-x-6 text-lg">
        <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
