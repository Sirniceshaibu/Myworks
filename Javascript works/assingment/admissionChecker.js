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