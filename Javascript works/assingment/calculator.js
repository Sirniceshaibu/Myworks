
function calculate(){
   var number1= document.getElementById("num1").value
   var number2= document.getElementById("num2").value
   var operator=document.getElementById("operator").value
   if(operator =="+"){

      var sum=Number(number1) + Number(number2)
      document.getElementById("answer").innerHTML=sum
   }
   else if(operator =="-"){

      var subtrate = Number(number1) - Number(number2)
      document.getElementById("answer").innerHTML=subtrate
   }
   else if(operator =="*"){

      var multiply = Number(number1) * Number(number2)
      document.getElementById("answer").innerHTML=multiply
   }
   else if(operator =="/"){

      var divide= Number(number1) / Number(number2)
      document.getElementById("answer").innerHTML=divide
   }
   else if(operator =="%"){

      var modulus = Number(number1) % Number(number2)
      document.getElementById("answer").innerHTML=modulus
   }
}
