import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "../validations/loginValidation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import axios from '../api/axios'

export default function login() {

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = { ...values };

        console.log("Body===============================", body);

        const validationErrors = validation(body);

        setErrors(validationErrors);
        if (
            validationErrors.email === "" &&
            validationErrors.password === ""
        ) {
            axios
                .post('teacher/login', values)
                .then((res) => {
                    console.log(res.data.status);
                    if (res.data.status === true) {
                        localStorage.setItem('login', true)
                        let login = localStorage.getItem('login')
                        if(login)
                        navigate("/teacherhome", {replace: true});
                        setValues(res.data);
                    } else {
                        alert("User does not exist");
                    }
                })
                .catch((err) => console.log(err));
        }
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };
    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center vh-100"
            style={{ backgroundImage: "radial-gradient(#35F5C6, #363A77)" }}
        >

            <div className="bg-white shadow p-5 rounded-4 w-25%">
                <form action="" onSubmit={handleSubmit}>
                    <h2 className="d-flex align-items-center justify-content-center mb-5">Teacher LogIn</h2>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>

                        <input
                            type="text"
                            placeholder="Enter Your Email"
                            className="form-control"
                            name="email"
                            onChange={handleInput}
                        />
                        {errors.email && <span className="text-danger">
                            {<FontAwesomeIcon icon={faCircleInfo} style={{ color: "red", }} />}
                            {errors.email} </span>}


                    </div>
                    <div className="mb-5">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            className="form-control"
                            name="password"
                            onChange={handleInput}
                        />
                        {errors.password && <span className="text-danger">
                            {<FontAwesomeIcon icon={faCircleInfo} style={{ color: "red", }} />}
                            {errors.password}
                        </span>}
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary bg-gradient w-100">
                            Log In
                        </button>
                    </div>
                    <div>
                        <p className="mt-3">Not a User?</p>
                        <Link to="/teachersignup" className="btn btn-light bg-gradient w-100">
                            Create An Account
                        </Link>
                    </div>
                </form>
            </div>
            <div className="d-grid gap-2">
                <Link to='/' className="mt-3">
                    Go to Student's Login
                </Link>
            </div>
        </div>
    );
}