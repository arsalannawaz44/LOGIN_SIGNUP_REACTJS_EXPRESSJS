import React from 'react'
import Navebar from './teacherNavebar'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


export default function studentHome() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [teacherId, Setteacherid] = useState();

  const handleteacherId = (e) => {
    Setteacherid(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCourses((prevCourses) => {
      if (isChecked) {
        return { ...prevCourses, [value]: value, teacherId };
      } else {
        const { [value]: _, ...updatedCourses } = prevCourses;
        return updatedCourses;
      }
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(selectedCourses);
  };
  return (
    <>
      {<Navebar heading="Teacher Dashboard" Courses="Add Courses" />}


      <div className="container w-25 d-flex flex-column justify-content-center">




          <h3 className="mb-3">Add Courses</h3>

          <div className="mb-3">
            <input 
            type="text" 
            id="last_name" 
            onChange={handleteacherId} 
            className="form-control" 
            placeholder="Enter Your ID" required />
          </div>

          <div className="d-flex mb-3 bg-info rounded p-3">
            <Form.Check 
              id="bordered-checkbox-1" 
              onChange={handleCheckboxChange} 
              type="checkbox" 
              value="1" 
              name="bordered-checkbox" 
              className="" />
            <label className="mx-5 text-white">Maths</label>
          </div>

          <div className="d-flex mb-3 bg-info rounded p-3">
            <Form.Check 
              id="bordered-checkbox-1" 
              onChange={handleCheckboxChange} 
              type="checkbox" 
              value="2" 
              name="bordered-checkbox" 
              className="" />
            <label className="mx-5 text-white">Science</label>
          </div>

          <div className="d-flex mb-3 bg-info rounded p-3">
            <Form.Check 
              id="bordered-checkbox-1" 
              onChange={handleCheckboxChange} 
              type="checkbox" 
              value="3" 
              name="bordered-checkbox" 
              className="" />
            <label className="mx-5 text-white">Physics</label>
          </div>

          <div className="d-flex mb-3 bg-info rounded p-3">
            <Form.Check 
              id="bordered-checkbox-1" 
              onChange={handleCheckboxChange} 
              type="checkbox" 
              value="4" 
              name="bordered-checkbox" 
              className="" />
            <label className="mx-5 text-white">Chemistry</label>
          </div>
          
          <div className="d-flex mb-3 bg-info rounded p-3">
            <Form.Check 
              id="bordered-checkbox-1" 
              onChange={handleCheckboxChange} 
              type="checkbox" 
              value="5" 
              name="bordered-checkbox" 
              className="" />
            <label className="mx-5 text-white">Computer Science</label>
          </div>

          <div className="d-flex mb-3 bg-info rounded p-3">
            <Form.Check 
              id="bordered-checkbox-1" 
              onChange={handleCheckboxChange} 
              type="checkbox" 
              value="6" 
              name="bordered-checkbox" 
              className="" />
            <label className="mx-5 text-white">English</label>
          </div>

          <button type="submit" onClick={handleSubmit} className="btn btn-success">Submit</button>
          

        </div>
        

    </>
  )
}