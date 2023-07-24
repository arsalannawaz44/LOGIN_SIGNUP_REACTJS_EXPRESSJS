import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes(props) {
  const {Component}=props;
  const navigate=useNavigate();

  useEffect(() =>{
    let login = localStorage.getItem('login');
    if  (!login){
      navigate('/teacherlogin')
    }
  })
  return (
    <div>
      <Component />
    </div>
  )
}

export default ProtectedRoutes
