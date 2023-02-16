function validationform(){
    var fullname = document.getElementById("fullname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmemail").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    if(fullname == "" || phone == "" || email == "" || confirmEmail =="" || password == "" || confirmpassword == ""){
        document.getElementById("result").innerHTML="All inputs are required";
    }else if ((!fullname.match(/^[A-Za-z ]+$/)) || fullname.length > 50){
        document.getElementById("result").innerHTML="Please enter a valid name";
    }else if ((!email.match(/\S+@\S+\.\S+/)) || email.length > 50){
        document.getElementById("result").innerHTML = "Please enter a valid email";

    }else if(email != confirmEmail){
        document.getElementById("result").innerHTML="Email do not match";
    }else if(password.length < 5 || confirmPassword > 5){
        document.getAnimations("result").innerHTML="Passsword and confirmPword must not be less than 5 charcters";

    }else if (password != confirmPassword){
        document.getElementById("result").innerHTML="password and comformPassword do not  match";
    }else if(!phone.match(/^\d{13}$/)){
        document.getElementById("result").innerHTML="Invalid phone number enterd"
    }else{
        Document.getElementById("result").innerHTML="Registration succefull"
    }
        




}
