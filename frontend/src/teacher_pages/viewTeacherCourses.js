import React from 'react'
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from 'axios'
import Navebar from './teacherNavebar'

export default function viewTeacherCourses() {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:4000/getteachercourses")
      .then(res=> setData(res.data))
      .catch(err=>console.log(err))
        // console.log(getdata);
      },[])
  return (
    <>
    {<Navebar heading="Teacher Dashboard" Courses="Add Courses"/>}
    <div className='container d-flex flex-column justify-content-center'>
    <h3 className="mb-3">Add Courses</h3>
    <React.Fragment>
      <Container>
        <div className="row">
          <div className="text-success">
            <table className="table table-bordered bg-light text-white">
              <thead>
                <tr>
                  <th>Courses ID</th>
                  <th>Courses Names</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => {
                    return <tr key={index}>
                    <td>{user.Course_Id}</td>
                    <td>{user.Course_Name}</td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>      
      </Container>
    </React.Fragment>
    </div>
    </>
  )
}
