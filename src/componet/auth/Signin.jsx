import React from 'react'
import { Container } from 'react-bootstrap'
import { Formik } from 'formik';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Signin() {
  const navigate = useNavigate()




  return (
     <div className="sigin-main">
        <Container>
        <div className="inner-login">
        <h1> LOGIN </h1>
    <div className="div-pass">
    <p>id:kminchelle</p>
        <p>pass:0lelplR</p>
    </div>
        <Formik
       initialValues={{ password: '', username: '' }}
       validate={values => {
         const errors = {};
         if (!values.password) {
           errors.password = ' password Required';
         } 

         if (!values.username) {
          errors.username = ' Name Required';
        } 
        
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
          const userdata={
             username:values.username,
             password:values.password,
          };
            console.log(userdata);
            axios
            .post("https://dummyjson.com/auth/login", userdata)
            .then(res=>{
              console.log(res);
              localStorage.setItem("token", res.data.token)
              localStorage.setItem("user", JSON.stringify(res.data))
              navigate("/")
              setSubmitting(false)
            })
            .catch(err=>console.log(err))

           
         });
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
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
            <label htmlFor="Name">Name</label>
           <input
             placeholder='Name'
             type="text"
             name="username"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.username}
           />
             <p className='error'> ~ {errors.username && touched.username && errors.username}</p>
           <label htmlFor="Password">password</label>

           <input
           placeholder='password'
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
            <p className='error'> ~ {errors.password && touched.password && errors.password}</p>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
       
     </Formik>
        </div>

        </Container>
    </div>

  )
}

export default Signin