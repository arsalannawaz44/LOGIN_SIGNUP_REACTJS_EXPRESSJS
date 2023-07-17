import React from 'react'
import Navebar from './teacherNavebar'

export default function studentHome() {

return (
    <>
      {<Navebar heading="Teacher Dashboard" Courses="Add Courses"/>}
      <div className='container d-flex justify-content-center'>
        <h1>
            Welcome To Teacher's Home Page
        </h1>
      </div>

    </>
  )
}