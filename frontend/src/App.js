import React from 'react'
import Student_Login from './student_pages/studentLogin'
import Student_Signup from './student_pages/studentSignup'
import Student_Home from './student_pages/studentHome'
import Student_Add_Courses from './student_pages/studentAddCourses'
import View_Student_Courses from './student_pages/viewStudentCourses'
import Teacher_Login from './teacher_pages/teacherLogin'
import Teacher_Signup from './teacher_pages/teacherSignup'
import Teacher_Home from './teacher_pages/teacherHome'
import Teacher_Add_Courses from './teacher_pages/teacherAddCourses'
import View_Teacher_Courses from './teacher_pages/viewTeacherCourses'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Student_Login />}></Route>
        <Route path='/studentsignup' element={<Student_Signup />}></Route>
        <Route path='/studenthome' element={<Student_Home />}></Route>
        <Route path='/studentaddcourses' element={<Student_Add_Courses />}></Route>
        <Route path='/viewstudentcourses' element={<View_Student_Courses />}></Route>
        <Route path='/teacherlogin' element={<Teacher_Login />}></Route>
        <Route path='/teachersignup' element={<Teacher_Signup />}></Route>
        <Route path='/teacherhome' element={<Teacher_Home />}></Route>
        <Route path='/teacheraddcourses' element={<Teacher_Add_Courses />}></Route>
        <Route path='/viewteachercourses' element={<View_Teacher_Courses />}></Route>
      </Routes>
    </BrowserRouter>
  )
}