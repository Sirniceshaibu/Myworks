document.getElementById("state").style.display="none"
document.getElementById("americausa").style.display="none"
document.getElementById("localgovermnet").style.display="none"
document.getElementById("province").style.display="none"


function showOrHide(){
    var country=document.getElementById("country").value
    if(country == "nigeria"){
        document.getElementById("state").style.display= "block"
        document.getElementById("americausa").style.display= "none"
    }else if(country == "america"){
        document.getElementById("americausa").style.display= "block"
        document.getElementById("state").style.display= "none"
    }
    
}
function showLga(){
    var state = document.getElementById("states").value
    if(state == "benue"){
        document.getElementById("localgovermnet").style.display ="block"
    }else{
        document.getElementById("localgovermnet").style.display ="none"
    }
}
function showFo(){
    var province = document.getElementById("statea").value
    if(province=="alabama"){
        document.getElementById("province").style.display= "block"
    }else{
        document.getElementById("province").style.display= "none"
    }
}





