import React from 'react'
import { Formik } from 'formik';
import { Container } from 'react-bootstrap';
import { IoMdLogOut } from "react-icons/io";



function Signin() {
    return (
        <div className="sigin-main">
            <div className="inner-login">
                <h1>LOG IN</h1>
                <Container>
                    <div className='flex-form'>

                        <Formik
                            initialValues={{ email: '', username: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
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
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                    placeholder='email'
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <p className='error'> ~ {errors.email && touched.email && errors.email}</p>
                                    <label htmlFor="username">username</label>

                                    <input
                                    placeholder='username'
                                        type="username"
                                        name="username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                    />
                                    <p className='error'> ~   {errors.username && touched.username && errors.username}</p>


                                    <button type="submit" disabled={isSubmitting}>
                                        Login<span className='arrow'>
                                            <IoMdLogOut className='arroww' />
                                        </span>
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </Container>

            </div>

        </div>
    )
}

export default Signin