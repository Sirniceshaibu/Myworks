
function agevalidation(){
    var child = document.getElementById("child").value
    if(child <=17 && child>=1){
        document.getElementById("checker").innerHTML="You are still under age"
    }else if(child<=29 && child >=18){
        document.getElementById("checker").innerHTML=("Your are a teenager")
    }else if(child<=150 && child >=30){
        document.getElementById("checker").innerHTML=("You are an adult")
    }else if(child < 0){
        document.getElementById("checker").innerHTML=("Nagative values are are not allowed")
    }else if(child ==""){
        document.getElementById("checker").innerHTML=("Age cant be empty")
    }else if(child > 150){
        document.getElementById("checker").innerHTML=("Invalid age")
    }
}