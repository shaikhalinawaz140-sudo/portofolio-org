let ali=document.querySelector('#alibtn');

ali.addEventListener("click",function(el){
    window.location.href = "file:///C:/Users/LENOVO/Documents/GitHub/clock/index.html"
})

let profileimg = document.querySelector('#profileimg');

profileimg.addEventListener("click", function() {

    if (profileimg.getAttribute("src") === "./img/portfolio pic.png") {
         profileimg.src = "./img/pic3.png"
         
    } else {
        profileimg.src = "./img/portfolio pic.png";
       
    }


});
// hambuger
let hamburger = document.querySelector("#hamburger");
let navlinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
  navlinks.classList.toggle("active");
 });
// form input 

document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("cotactForm");
    
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    const successMsg = document.getElementById("successMsg");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        let isValid = true;

        // Clear old messages
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        successMsg.textContent = "";

        // Name validation
        if(nameInput.value.trim() === ""){
            nameError.textContent = "Name is required";
            isValid = false;
        }

        // Email validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(emailInput.value.trim() === ""){
            emailError.textContent = "Email is required";
            isValid = false;
        }
        else if(!emailPattern.test(emailInput.value.trim())){
            emailError.textContent = "Enter valid email";
            isValid = false;
        }

        // Message validation
        if(messageInput.value.trim() === ""){
            messageError.textContent = "Message is required";
            isValid = false;
        }
        else if(messageInput.value.trim().length < 10){
            messageError.textContent = "Message must be at least 10 characters";
            isValid = false;
        }

        // Final check
        if(isValid){
            successMsg.textContent = "Form submitted successfully";
            successMsg.classList.add("success");
            form.reset();
        }

    });

});