import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import SignIn from './pages/signin'
import Login from './pages/login'
import Home from './pages/home'
import AboutUs from './pages/aboutus'
import ContactUs from './pages/contectus'
import Dashboard from './pages/dashboard'

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
    element:<><Dashboard/></>
  }

])

function App() {
  return <RouterProvider router={router}/>
}

export default App
