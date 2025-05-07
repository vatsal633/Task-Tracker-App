import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import ProtectedRoutes from './components/protectedRoutes'
import SignIn from './pages/signin'
import Login from './pages/login'
import Home from './pages/home'
import AboutUs from './pages/aboutus'
import ContactUs from './pages/contectus'
import Dashboard from './pages/dashboard'
import Profile from './pages/profile'
import ProjectDetails from './pages/ProjectsDetails'

const router = createBrowserRouter([
  {
    path:'/',
    element:<><Home/></>
  },

  {
    path:'/signin',
    element:<><SignIn/></>
  },
  {
    path:"/login",
    element:<><Login/></>
  },
  {
    path:'/about',
    element:<><AboutUs/></>
  },
  {
    path:'/contact',
    element:<><ContactUs/></>
  },

  //protected routes
  {
    path:'/:name/dashboard',
    element:<><ProtectedRoutes><Dashboard/></ProtectedRoutes></>
  },

  {
    path:'/:name/profile',
    element:<><ProtectedRoutes><Profile/></ProtectedRoutes></>
  },
  {
    path:'/:name/:projectName',
    element:<><ProtectedRoutes><ProjectDetails/></ProtectedRoutes></>
  },
  

])

function App() {
  return <RouterProvider router={router}/>
}

export default App
