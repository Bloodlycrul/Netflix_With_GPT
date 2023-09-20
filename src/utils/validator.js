

export const validator = (email, password) => {
 const checkEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
 const checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);


 if(!checkEmail){
    return 'Please Check You Email'
 }

 if(!checkPassword){
    return 'Please Check Your Password'
 }

 return null;

}