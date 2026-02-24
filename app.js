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
// for name
    const form = document.getElementById("cotactForm");
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const successMsg = document.getElementById("successMsg");

// for email
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        let isValid = true;

        if(nameInput.value.trim() === ""){
            nameError.textContent = "Name is required";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        if(isValid){
            successMsg.textContent = "Form submitted successfully !";
            form.reset();
        } else {
            successMsg.textContent = "";
        }
    });

});
