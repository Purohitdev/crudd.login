import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import Loader from './Loader';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiEdit3 } from "react-icons/fi";
import { TbHttpDelete } from "react-icons/tb";
import { MdOutlineDeleteSweep } from "react-icons/md";
import Signin from './auth/Signin';




function Userlist() {
  const [users, setUsers] = useState([]);

  const getData = () => {
    axios
      .get("https://6620d6863bf790e070b0dea1.mockapi.io/records/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteUser = (id) => {
    axios
      .delete("https://6620d6863bf790e070b0dea1.mockapi.io/records/users/" + id)
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => console.log(err));
  };


 


  return (
    <div className="main-outer">
      <h1 className='up'>student list</h1>
      <Container>
        <table className="table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>age</th>
              <th>project</th>
              {/* <th>update</th> */}
              <th>action</th>



            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((user, ind) => {
                return (
                  <tr key={user.id}>
                    <td>{++ind}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.project}</td>
                    <td>
                
                      <button onClick={() => deleteUser(user.id)}><span><MdOutlineDeleteSweep /></span> </button>
                  
                      <button className='end'>
                        <Link to={"/Edituser/" + user.id}> <span><FiEdit3 /></span></Link>
                      </button>                 
                       </td>
                  </tr>
                );
              })
            ) : (
              <Loader />
            )}
          </tbody>
        </table>
      </Container>

    </div>
  )
}

export default Userlist