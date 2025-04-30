import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border border-t-0 border-b-0 border-r-gray-300 p-6 space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">WorkSync</h2>
      <nav className="space-y-3">
        <Link to="/dashboard" className="block text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/projects" className="block text-gray-700 hover:text-blue-600">Projects</Link>
        <Link to="/tasks" className="block text-gray-700 hover:text-blue-600">Tasks</Link>
        <Link to="/profile" className="block text-gray-700 hover:text-blue-600">Profile</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
