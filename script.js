document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#show-login").addEventListener("click", function () {
        document.querySelector(".popup").classList.add("active");
    });

    document.querySelector(".popup .close-btn").addEventListener("click", function () {
        document.querySelector(".popup").classList.remove("active");
    });
});


const form = document.querySelector("form")
var email = document.getElementById("email");
var err = document.getElementById("err");
var pwd = document.getElementById("pwd");
var pass = document.getElementById("pass");

function validate(){
    console.log('button clicked');
    var correctUser = "admin";
    if(email.value===correctUser){
        err.innerHTML = "User Name is valid";
        err.style.color = "green";
        return true;
    }
    else{
        err.innerHTML ="User Name is invalid";
        err.style.color = "red";    
        return false;
    }
}
function display(){
    var correctPass = "12345";
    if(pwd.value===correctPass){
        pass.innerHTML = "Password is valid";
        pass.style.color = "green";
        return true;
    }
    else{
        pass.innerHTML ="Password is invalid";
        pass.style.color = "red";    
        return false;
    }

}

function hide(){
    err.innerText = "";
    pass.innerText = "";
}

function checkValidation() {
    hide(); 
    if (validate() && display()) {
        
        async function navigateToHomePage() {
            await new Promise(resolve => setTimeout(resolve));
            window.location.href = 'home.html';
        }

        navigateToHomePage(); 
    } else {
       
        alert('Invalid credentials');
    }
}



