import React from 'react'
import { Link } from 'react-router-dom'
const button = ({url,name,icon}) => {
    return (
        <Link
            to="/login"
            className="rounded-md border border-indigo-600 px-6 py-2 text-indigo-600 hover:bg-indigo-50"
        >
            {icon}  {name}
        </Link>
    )
}

export default button