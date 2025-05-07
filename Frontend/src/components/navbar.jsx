import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showDashboardLink, setShowDashboardLink] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"))?.token;
    const name = JSON.parse(localStorage.getItem("token"))?.name;
  }, []);




  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-2xl">
      <div className="text-2xl font-bold text-blue-600">
        <Link to='/'>
          WorkSync
        </Link>
      </div>
      {showDashboardLink ? (
          <div className="rounded-md border border-indigo-600 px-6 py-2 text-indigo-600 hover:bg-indigo-50 cursor-pointer" onClick={()=>{
            navigate(`${name}/dashboard`)
          }}>Dashboard</div>
      ) : ""}

      <div className="space-x-6 text-lg">
        <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
