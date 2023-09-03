var loginForm = document.getElementById("login");
var signupForm = document.getElementById("signup");
var Indicator = document.getElementById("Indicator");

function signin(){

    signupForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";

}

function login(){

    signupForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";

}  