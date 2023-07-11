import React from 'react'
import { Link } from 'react-router-dom'

function Student_Login() {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundImage: 'radial-gradient(#35F5C6, #363A77)'}}>
            <div className='bg-white shadow p-5 rounded-4 w-25'>
                <form action=''>
                    <h2 className='mb-5'>
                         Student LogIn
                    </h2>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type='email' placeholder='Enter Your Email' className='form-control' />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="password">Password</label>
                        <input type='password' placeholder='Enter Your Password' className='form-control' />
                    </div>
                    <div>
                        <button className='btn btn-primary bg-gradient w-100'>Log In</button>
                        </div>
                        <div>
                        <p className='mt-3'>Not a User?</p>
                        <Link to='/signup' className='btn btn-success bg-gradient w-100'>Create An Account</Link>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Student_Login
