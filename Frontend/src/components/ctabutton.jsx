import React from 'react'
import { Link } from 'react-router-dom'

const ctabutton = ({url,name}) => {
  return (
    <Link
    to={`${url}`}
    className="rounded-md bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700"
  >
    {name}
  </Link>
  )
}

export default ctabutton