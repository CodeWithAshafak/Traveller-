function login(){
 let email =   document.querySelector('.email').value;
 let pass = document.querySelector('.password').value;

 if(email == ""){
    window.alert("please enter email ");
    document.querySelector('.email').focus();
    return false;
 }
 else if(!email.includes('.com')){
    window.alert("please add .com to the email address")
    document.querySelector('.email').focus();
    return false;
 }
 else if (!email.includes("@")) {
    window.alert("please enter valid email only");
    document.querySelector(".email").focus();
    return false;
  }
else if (! (     pass.match(/[0123456789]/) && pass.match(/[qwertyuiopasdfghjklzxcvbnm]/) &&  pass.match(/[ASDFGHJKLPOIYTREWQXCVBNM]/) && pass.match(/[!@#$%^&*]/) ) ){
    window.alert("please enter strong password ");
    document.querySelector(".email").focus();
    return false;

}
else{
   // window.location.href = "login.html";
    window.open("index.html");
    
    
}
window.alert("You are logged in ")
return true;
}