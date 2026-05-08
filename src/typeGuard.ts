// module 3.3
//1. typeof type guard
//2. in typeof in guard
type AlphaNumeric = number|string;
const add =(num1:AlphaNumeric, num2:AlphaNumeric)=>{
    if(typeof num1 === "number" && typeof num2==="number"){
        return num1+num2;
    }
    else{
        num1.toString() + num2.toString();
    }
}


// 2. in typeof guard
type NormalUser ={
    name:string;
}
type AdminUser ={
    name:string;
    role:string;
}

const getUserInfo = (user:NormalUser | AdminUser)=>{
if("role" in user ){
    console.log(`Admin User name :${user.name}, Role:${user.role}`)
}else{
    console.log(`Normal User Name: ${user.name}`)
}
}
// getUserInfo({name:"Mollika Mandal", role:"Admin"})
getUserInfo({name:"Rabindra"});
