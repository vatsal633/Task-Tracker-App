import {React,useState} from 'react'
import { FiSearch, FiX } from 'react-icons/fi';
import Button from '../button';
import CreateProjectModel from './createProjectModel';


const searchbar = () => {
   const [search, setSearch] = useState('');
   

  return (
    <>
    <div className="relative w-full  mt-12 block"> 
      <input
        type="text"
        placeholder="Search projects"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
      {search && (
        <button
          onClick={() => setSearch('')}
          className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <FiX />
        </button>
      )}
    </div>
    </>
  );
}

export default searchbar