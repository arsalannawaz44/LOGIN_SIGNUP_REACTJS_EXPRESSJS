export default function validation(values){
    let error = {}
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_regex = /^(?=.*[A-Z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{7,24}$/;

    if(values.email === ""){
        error.email = " Please Enter Your Email"
    }
    else if(!email_regex.test(values.email)){
        error.email = " Email is not Valid"
    }
    else{
        error.email = ""
    }

    if(values.password === ""){
        error.password = " Please Enter Your Password"
    }
    else if(!password_regex.test(values.password)){
        error.password = " Password is not Correct"
    }
    else{
        error.password= ""
    }
    return error;

}