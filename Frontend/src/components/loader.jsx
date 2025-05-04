import React from 'react'

const loader = () => {
    return (
        <div className="flex items-center justify-center  h-56   bg-gray-50 dark:border-gray-700">
            <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
        </div>
    )
}

export default loader