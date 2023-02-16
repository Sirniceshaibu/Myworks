

function getQuote(){
    axios.get("https://api.quotable.io/random")
    .then(rep => {
        document.getElementById("content").innerHTML= rep.data.content
        document.getElementById("author").innerHTML= rep.data.author
    })
    .catch(erro =>{console.log(erro)})
}


 async function getQuotes(){
   try {
        const res = await axios.get("https://api.quotable.io/random")
        document.getElementById("content").innerHTML= res.data.content
        document.getElementById("author").innerHTML= res.data.author
    }catch(error){
        document.getElementById("error").innerHTML = error
    }
    
    }


