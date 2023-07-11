import React, { useRef } from 'react'
import { useRef, useState, useEffect } from "react";
import { faCheck,faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const std_user_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const std_pass_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Student_Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState('false');
    const [userFocus, setUserFocus] = useState('false');

    const [pass, setPass] = useState('');
    const [validPass, setValidPass] = useState('false');
    const [passFocus, setPassFocus] = useState('false');

    const [matchPass, setMatchPass] = useState('');
    const [validMatch, setValidMatch] = useState('false');
    const [matchFocus, setMatchFocus] = useState('false');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

  return (
    <div>
      
    </div>
  )
}

export default Student_Register
