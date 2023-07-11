import React from 'react'
import Student_Login from './Student_Login'
import Student_Signup from './Student_Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Student_Login />}></Route>
        <Route path='/signup' element={<Student_Signup />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
