import React from 'react';
import { Link,useParams} from 'react-router-dom';

const Sidebar = () => {
  const {name} = useParams();
 
  return (
    <div className="w-64 bg-white border border-t-0 border-b-0 border-r-gray-300 p-6 space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">WorkSync</h2>
      <nav className="space-y-3">
        <Link to={`/${name}/dashboard`} className="block text-gray-700 hover:text-blue-600">Home</Link>
        <Link to={`/${name}/profile`} className="block text-gray-700 hover:text-blue-600">Profile</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
