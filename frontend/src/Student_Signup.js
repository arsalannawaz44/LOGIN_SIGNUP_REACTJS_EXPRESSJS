import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Student_Signup() {
    const [val, setVal] = useState("");
    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundImage: 'radial-gradient(#35F5C6, #363A77)' }}>
            <div className='bg-white shadow p-5 rounded-4 w-25'>
                <form action=''>
                    <h2 className='mb-5'>
                        Create An Account
                    </h2>
                    <div className='mb-3'>
                        <label htmlFor="name">Name</label>
                        <input type='text' placeholder='Enter Your Full Name' className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type='email' placeholder='Enter Your Email' className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="text">Class</label>
                        <input 
                            type="number"
                            placeholder='Enter Your Class' 
                            className='form-control'
                            pattern="[1-9]|10"
                            value={val}
                            onChange={(e) =>
                            setVal((v) => (e.target.validity.valid ? e.target.value : v))
                            }
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type='password' placeholder='Enter Your Password' className='form-control' />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type='password' placeholder='Confirm Your Password' className='form-control' />
                    </div>
                    <div>
                        <Link to='/' className='btn btn-success bg-gradient w-100'>Create An Account</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Student_Signup
