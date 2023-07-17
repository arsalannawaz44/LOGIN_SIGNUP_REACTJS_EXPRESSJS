export default function validation(values){
    let error = {}
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_regex = /^(?=.*[A-Z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    if(values.name === ""){
        error.name = " Name Should not be Empty",
        error.status = true
    }
    else{
        error.name = "",
        error.status = false
    }

    if(values.email === ""){
        error.email = " Email Should not be Empty",
        error.status = true
    }
    else if(!email_regex.test(values.email)){
        error.email = " Email is not Valid (Example: abc@mail.com)",
        error.status = true
    }
    else{
        error.email = "",
        error.status = false
    }

    if(values.class === ""){
        
        error.class = " Class Should not be Empty",
        error.status = true
    }
    else{
        error.class = "",
        error.status = false
    }

    if(values.password === ""){
        error.password = " Password Should not be Empty",
        error.status = true
    }
    else if(!password_regex.test(values.password)){
        error.password = " Password Should be at least 8 digits 1 Capital, 1 Small letter, A Number and include any of these (!@#$%) ",
        error.status = true
    }
    else{
        error.password= "",
        error.status = false
    }
    return error;

}