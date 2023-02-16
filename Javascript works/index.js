bdocument.getElementById("header").innerHTML="WELCOME TO MY WEPSITE"
document.getElementById("mark").innerHTML=" GOD IS GREAT"
var password = "1234"
var comfirmPassword =1234
document.write(password===comfirmPassword)
var password = "1234"
var comfirmPassword =1234
document.write(password==comfirmPassword)
var email = "joe@gmail.com"
var comfirmEmail = "joe@gmail.com "
document.write (email==comfirmEmail.trim())
document.write (email===comfirmEmail)
var num1 = "100"
var num2 = 100
document.write(num1 != num2)
var idCard = true
var faceMark = false
document.write(idCard&&faceMark)
var raining = true
document.write(!raining)
var food ="rice"
document.write("i wish t0 eat" +food+"today")
var y = 13
document.write (!(y>10)) && ! (2<4) // ! (10=10)
function sirnice(x,y) {
    document.write(x+y)
}
sirnice(10,5)
function green(){
    document.getElementById("header").innerHTML=" hope you are happy"
    document.getElementById("header").style.backgroundColor="green"
}
function blue(){
    document.getElementById("header").innerHTML="thank for coming"
    document.getElementById("header").style.color="blue"
}
function red(){
    document.getElementById("header").innerHTML="thank for coming"
    document.getElementById("header").style.color="red"
}

function add(x,y){
    document.getElementById("answer").innerHTML.write(x+y)
}
add(4,6)


function add(x,y){
    var sum = x+y
    document.getElementById("answer").innerHTML =sum
}
 






var weeekdays = ["sundays","mondays","tuesdays","wenesdays","thursdays","fridays"<"satudays"];
var holder = document.getElementById("holder");
for( var i=0; i < weeekdays.length; i++){
    holder.innerHTML += "<li>"+ weeekdays[i] +"</li>";

}
arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}