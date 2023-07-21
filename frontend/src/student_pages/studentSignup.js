import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import validation from '../validations/signupValidation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import axios from '../api/axios';

export default function signup() {
    // const [val, setVal] = useState("");

    // const handleChange = (e) => {
    //     const newValue = e.target.value;
    //     if (newValue <= 10 && newValue >= 1) {
    //         setVal(newValue);
    //     }
    // };

    const [values, setValues] = useState({
        name: '',
        email: '',
        class: '',
        password: ''
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const body = { ...values }

        console.log("Body===============================", body)
        const validationErrors = validation(body);
        setErrors(validationErrors);
        if (
            validationErrors.name == '' &&
            validationErrors.email == '' &&
            validationErrors.class == '' &&
            validationErrors.password == ''
        )


            axios
                .post('studentsignup', values)
                .then((response) => {
                    console.log('Signup successful!');
                    console.log('Response data:', response.data);
                    navigate('/');
                })
                .catch((error) => {
                    console.error('Error during Signup:', error);
                });
    };



    return (
        <div className='d-flex flex-column justify-content-center align-items-center vh-100' style={{ backgroundImage: 'radial-gradient(#35F5C6, #363A77)' }}>
            <div className='bg-white shadow p-5 rounded-4 w-25%'>
                <form action='' onSubmit={handleSubmit}>
                    <h2 className='d-flex align-items-center justify-content-center mb-5'>
                        Student Sign Up
                    </h2>
                    <div className='mb-3'>
                        <label htmlFor="name">Name</label>
                        <input type='text' placeholder='Enter Your Full Name' className='form-control' name='name' onChange={handleInput} />
                        {errors.name && <span className="text-danger">
                            {<FontAwesomeIcon icon={faCircleInfo} style={{ color: "red", }} />}
                            {errors.name}
                        </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type='text' placeholder='Enter Your Email' className='form-control' name='email' onChange={handleInput} />
                        {errors.email && <span className="text-danger">
                            {<FontAwesomeIcon icon={faCircleInfo} style={{ color: "red", }} />}
                            {errors.email}
                        </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="text">Class</label>
                        <input
                            type="number"
                            placeholder='Enter Your Class'
                            className='form-control'
                            name='class'
                            // pattern="[0-9]*"
                            // value={val}
                            onChange={handleInput}
                        />
                        {errors.class && <span className="text-danger">
                            {<FontAwesomeIcon icon={faCircleInfo} style={{ color: "red", }} />}
                            {errors.class}
                        </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type='password' placeholder='Enter Your Password' className='form-control' name='password' onChange={handleInput} />
                        {errors.password && <span className="text-danger">
                            {<FontAwesomeIcon icon={faCircleInfo} style={{ color: "red", }} />}
                            {errors.password}
                        </span>}
                    </div>
                    <div>
                        <button type='submit' className='btn btn-success bg-gradient w-100 mb-3'>Sign Up</button>
                    </div>
                    <div>
                        <Link to='/' className="btn btn-light bg-gradient w-100">
                            Log In
                        </Link>
                    </div>
                </form>
            </div>
            <div className="d-grid gap-2">
                <Link to='/teachersignup' className="mt-3">
                    Go to Teacher's Signup
                </Link>
            </div>
        </div>
    )
}