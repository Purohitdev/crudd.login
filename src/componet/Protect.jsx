import React from 'react'
import { Nav } from 'react-bootstrap';
import { Navigate, Outlet } from 'react-router-dom'
import Navb from './Nav';


function Protect() {
  const token = localStorage.getItem("token");
  return (
    <div>
      {
        token ?<><Navb /> <Outlet/></> : <Navigate to={"/Signin"} />
       
      }

   
        
    </div>
  )
}

export default Protect