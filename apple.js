function validate(event){
    event.preventDefault();
    var apple=document.getElementById("apple").value;
    var password=document.getElementById("pass").value;
    if(apple=="2255"&&password=="vigh"){
        location.replace("index.html")
        return;
    }else{
    alert("enter valid number and password");
    return;
        }
    }
    