import React from 'react'
import Navebar from './studentNavebar'

export default function studentHome() {

  return (
    <>
      {<Navebar heading="Student Dashboard" Courses="Add Courses" link="studenthome" />}
      <div className='container d-flex justify-content-center'>
        <h1>
          Welcome To Student's Home Page
        </h1>
      </div>
    </>
  )
}