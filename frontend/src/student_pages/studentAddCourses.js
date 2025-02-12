import React from "react";
import Navebar from "./studentNavebar";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from '../api/axios'

export default function studentHome() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [student_id, Setstudentid] = useState();

  const navigate = useNavigate();

  const handlestudentId = (e) => {
    Setstudentid(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const isChecked = e.target.checked;
    setSelectedCourses((prevCourses) => {
      if (isChecked) {
        return { ...prevCourses, [name]: value, student_id };
      } else {
        const { [name]: _, ...updatedCourses } = prevCourses;
        return updatedCourses;
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedCourses);
    axios
      .post('studentcourse', selectedCourses)
      .then((response) => {
        console.log("Course Added successfully!");
        console.log("Response data:", response.data);
        navigate("/viewstudentcourses");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      {<Navebar heading="Student Dashboard" Courses="Add Courses" />}

      <div className="container w-25% d-flex flex-column justify-content-center">
        <h3 className="mb-3">Student Add Courses</h3>

        <div className="mb-3">
          <input
            type="text"
            id="last_name"
            onChange={handlestudentId}
            className="form-control"
            placeholder="Enter Your ID"
            required
          />
        </div>

        <div className="d-flex mb-3 bg-info rounded p-3">
          <Form.Check
            id="bordered-checkbox-1"
            onChange={handleCheckboxChange}
            type="checkbox"
            value="1"
            name="course_id"
            className=""
          />
          <label className="mx-5 text-white">Mathematics</label>
        </div>

        <div className="d-flex mb-3 bg-info rounded p-3">
          <Form.Check
            id="bordered-checkbox-1"
            onChange={handleCheckboxChange}
            type="checkbox"
            value="2"
            name="course_id"
            className=""
          />
          <label className="mx-5 text-white">Physics</label>
        </div>

        <div className="d-flex mb-3 bg-info rounded p-3">
          <Form.Check
            id="bordered-checkbox-1"
            onChange={handleCheckboxChange}
            type="checkbox"
            value="3"
            name="course_id"
            className=""
          />
          <label className="mx-5 text-white">Urdu</label>
        </div>

        <div className="d-flex mb-3 bg-info rounded p-3">
          <Form.Check
            id="bordered-checkbox-1"
            onChange={handleCheckboxChange}
            type="checkbox"
            value="4"
            name="course_id"
            className=""
          />
          <label className="mx-5 text-white">Chemistry</label>
        </div>

        <div className="d-flex mb-3 bg-info rounded p-3">
          <Form.Check
            id="bordered-checkbox-1"
            onChange={handleCheckboxChange}
            type="checkbox"
            value="5"
            name="course_id"
            className=""
          />
          <label className="mx-5 text-white">Computer Science</label>
        </div>

        <div className="d-flex mb-3 bg-info rounded p-3">
          <Form.Check
            id="bordered-checkbox-1"
            onChange={handleCheckboxChange}
            type="checkbox"
            value="6"
            name="course_id"
            className=""
          />
          <label className="mx-5 text-white">English</label>
        </div>

        <div className="d-flex mb-3 bg-info rounded p-3">
          <Form.Check
            id="bordered-checkbox-1"
            onChange={handleCheckboxChange}
            type="checkbox"
            value="6"
            name="course_id"
            className=""
          />
          <label className="mx-5 text-white">Social Studies</label>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </>
  );
}
