import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Signin from './auth/Signin'

function Public() {
  const token = localStorage.getItem("token");
  return (
    <div>
       {
        !token ? <Outlet/> :<Navigate to="/"/>
 }
    </div>
 

   
  )
}


export default Public