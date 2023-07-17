import React from 'react'
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from 'axios'
import Navebar from './studentNavebar'

export default function viewStudentCourses() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://192.168.253.19:4000/courses/all")
      .then(res => {
        setData(res.data)
        // console.log(res.data);
      })
      .catch(err => console.log(err))
    // console.log(getdata);
  }, [])
  return (
    <>
      {<Navebar heading="Student Dashboard" Courses="Add Courses" />}
      <div className='container d-flex flex-column justify-content-center bg-info'>
        <h3 className="m-5 text-center">Student View Courses</h3>
        <React.Fragment>
          <Container>
            <div className="row">
              <div className="text-success mb-5">
                <table className="table table-light table-striped text-center">
                  <thead>
                    <tr>
                      <th>Courses ID</th>
                      <th>Courses Names</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.courses?.length && data?.courses?.map((user, index) =>
                      <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                      </tr>
                    )}
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
