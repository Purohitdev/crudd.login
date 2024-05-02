import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoMdLogOut } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../image/icons8-jira-240.png'




function Navb() {
  const navigate = useNavigate()
  const onlogoutHandler = ()=>{
    localStorage.clear()
    navigate("/Signin")
  }
  return (
    <div className="outer">
      <Navbar className='nav'>
        <Container>
          <Navbar.Brand href="#home" className='logo'>MANAGEMENT </Navbar.Brand>
          <Nav className="me-mid   mid">
          <NavLink className="nav-link" to="/">student list</NavLink>
          <NavLink className="nav-link" to="/Adduser">Add-user</NavLink>
        
          </Nav>
          <div className="but">

            <Button className='org-butt' onClick={onlogoutHandler}> Log out  <span className='arrow'>
            <IoMdLogOut className='arroww'/>
             </span>
            </Button>

          </div>
        </Container>
      </Navbar>
    </div>

  );
}

export default Navb;