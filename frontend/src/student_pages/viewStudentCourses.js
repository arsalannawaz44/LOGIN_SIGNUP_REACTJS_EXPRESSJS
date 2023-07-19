import React from 'react'
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Courses } from '../components/courses'
import axios from '../axios/index'
import Navebar from './studentNavebar'

export default function viewStudentCourses() {

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get('courses/all')
  //     .then(res => {
  //       setData(res.data)
  //       // console.log(res.data);
  //     })
  //     .catch(err => console.log(err))
  //   // console.log(getdata);
  // }, [])

  const [query, setQuery] = useState("")
  console.log(query)
  return (
    <>
      {<Navebar heading="Student Dashboard" Courses="Add Courses" />}
      <div className='container d-flex flex-column justify-content-center bg-info'>
        <h3 className="m-5 text-center">Student View Courses</h3>
        <Form className="d-flex">
          <div className='m-3'>

            <Form.Control
              type="search"
              placeholder="Search"
              className=""
              aria-label="Search"
              style={{ width: 300 }}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
        </Form>
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
                    {/* {data?.courses?.length && data?.courses?.map((a, index) =>
                      <tr key={index}>
                        <td>{a.id}</td>
                        <td>{a.name}</td>
                      </tr>
                    )} */}
                    {Courses.filter((course) =>
                      course.course_name.toLowerCase().includes(query)
                    ).map((course) => (
                      <tr>
                        <td>{course.id}</td>
                        <td>{course.course_name}</td>
                      </tr>
                    ))}
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
