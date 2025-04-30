import React from 'react';

const Topbar = () => {
  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Welcome, User</span>
        <button className="px-3 py-1 bg-blue-600 text-white rounded">Logout</button>
      </div>
    </div>
  );
};

export default Topbar;
