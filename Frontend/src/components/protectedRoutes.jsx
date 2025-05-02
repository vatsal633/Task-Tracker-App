import React from 'react'
import { Navigate, useParams } from 'react-router-dom'

const ProtectedRoutes = ({ children }) => {
    const { name } = useParams()


    const isAuthenticated = JSON.parse(localStorage.getItem("token"))

    const storedName = isAuthenticated?.name
    const storedToken = isAuthenticated?.token

    if (!storedToken || !storedName || storedName !== name || !isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return children

}
export default ProtectedRoutes