function registration(){
    var fullname = document.getElementById("fullname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmemail").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    if(fullname == "" || phone == "" || email == "" || confirmEmail =="" || password == "" || confirmpassword == ""){
        document.getElementById("register").innerHTML="All inputs are required";
    }else if ((!fullname.match(/^[A-Za-z ]+$/)) || fullname.length > 50){
        document.getElementById("register").innerHTML="Please enter a valid name";
    }else if ((!email.match(/\S+@\S+\.\S+/)) || email.length > 50){
        document.getElementById("register").innerHTML = "Please enter a valid email";
    }else if(!email == confirmEmail){
        document.getElementById("register").innerHTML="Email do not match";
    }else if(password.length < 5 || confirmPassword > 5){
        document.getAnimations("register").innerHTML="Passsword and confirmPword must not be less than 5 charcters";

    }else if (!password == confirmPassword){
        document.getElementById("register").innerHTML="password and comformPassword do not  match";
    }else if(phone.match(/^\d{13}$/)){
        document.getElementById("register").innerHTML="Invalid phone number enterd";
    }else{
        document.getElementById("register").innerHTML="Registration Successful";
    }
        
}



function checkAdmission(){
    var jambscore = document.getElementById("jambscore").value;
    var cutoff =180
    var max = 400
    if(jambscore >=cutoff && jambscore <= max){
        document.getElementById("message").innerHTML = "Congratulations! You are eligible for admission into the university";
    }else if (jambscore < cutoff && jambscore > 0){
       document.getElementById("message").innerHTML = "We are sorry, You are NOT eligible for admission, you scored below 180";   
    }else if (jambscore === "0"){
       document.getElementById("message").innerHTML = "jambscore cant be zero"
    }else if (jambscore > max){
       document.getElementById("message").innerHTML = "You cant cant score above max"
    }else if (jambscore ==""){
       document.getElementById("message").innerHTML ="Please enter your jamb score"
    }else if (jambscore < 0){
       document.getElementById("message").innerHTML = "jambscore cant be negative";
    }
    else{
       document.getElementById("message").innerHTML = "jambscore cant be negative";
    }
  }
