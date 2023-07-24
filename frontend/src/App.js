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
import ProtectedRoutes from './student_pages/protectedRoutes'
import TeacProtectedRoutes from './teacher_pages/protectedRoutes'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Student_Login />}></Route>
        <Route path='/studentsignup' element={<Student_Signup />}></Route>
        <Route path='/teacherlogin' element={<Teacher_Login />}></Route>
        <Route path='/teachersignup' element={<Teacher_Signup />}></Route>
        {/* <Protected Routes> */}

        {/* Student Routes */}
        <Route path='/studenthome' element={<ProtectedRoutes Component={Student_Home} />}></Route>
        <Route path='/studentaddcourses' element={<ProtectedRoutes Component={Student_Add_Courses} />}></Route>
        <Route path='/viewstudentcourses' element={<ProtectedRoutes Component={View_Student_Courses} />}></Route>
        {/* Teacher Routes */}
        <Route path='/teacherhome' element={<TeacProtectedRoutes Component={Teacher_Home} />}></Route>
        <Route path='/teacheraddcourses' element={<TeacProtectedRoutes Component={Teacher_Add_Courses} />}></Route>
        <Route path='/viewteachercourses' element={<TeacProtectedRoutes Component={View_Teacher_Courses} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}