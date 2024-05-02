import React from 'react'
import { Container } from 'react-bootstrap'
import { Formik } from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from 'react';



function Edituser() {
  const navigate = useNavigate();
  const { userid } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(
       "https://6620d6863bf790e070b0dea1.mockapi.io/records/users/" + userid
      )
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [userid]);


 

  return (
 <div className="main-outer">
  <Container>
  <h1 className='up'>Edit User</h1>


<div className="card-add">

    <Formik

        initialValues={{
           email: user.email,
            age: user.age, 
            name: user.name, 
            project: user.project 
          }}
          enableReinitialize={true}

        validate={values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'email is Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }

            if (!values.age) {
                errors.age = 'age is Required';
            }
            if (!values.name) {
                errors.name = 'name is Required';
            }
            if (!values.project) {
                errors.project = 'project is Required';
            }


            return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                axios
                  .put(
                    "https://6620d6863bf790e070b0dea1.mockapi.io/records/users/"+userid,
                    values
                  )
                  .then((res) => {
                    console.log(res);
                    // navigate("/users")
                    navigate("/")


                  })
                  .catch((err) => console.log(err));
                }, 400);
        }}
    >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
        }) => (
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">name :</label>
                <input
                    type="name"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />
                <p className='error'> ~ {errors.name && touched.name && errors.name}</p>
                <label htmlFor="email">email :</label>

                <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                <p className='error'> ~ {errors.email && touched.email && errors.email}</p>


                <label htmlFor="age">age :</label>

                <input
                    type="number"
                    name="age"
                    placeholder='Age'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                />
                <p className='error'> ~ {errors.age && touched.age && errors.age}</p>


                <label htmlFor="project">project :</label>

                <input
                    type="project"
                    name="project"
                    placeholder='Project'

                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.project}
                />
                
                <p className='error'>~{errors.project && touched.project && errors.project}</p>
                <button type="submit" disabled={isSubmitting}>
                    update
                </button>
            </form>

        )}
    </Formik>
</div>

    </Container>
 </div>
  )
}

export default Edituser