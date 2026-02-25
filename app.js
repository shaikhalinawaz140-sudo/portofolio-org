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
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("messageInput");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    const successMsg = document.getElementById("successMsg");

// step 2 fom submit event
form.addEventListener("submit", function(e){
    e.preventDefault(); //page load na ho

    let isValid = true; //from k varible chike karo
    nameError.textContent ="";
    emailError.textContent="";
    messageError.textContent="";
    successMsg.textContent="";

// step 3 validaton
if(nameInput.value.trim() ===""){
    nameError.textContent = "Name is required",
    isValid = false;
}    
})

//step 4 Email validation

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(emailInput.value.trim()===""){
    emailError.textContent ="Email is requird";
    isValid = false;
}
else if(!emailPattern.test(emailInput.value.trim())){
    emailError.textContent = "enter valid email";
    isValid = false;
}

//step 5 message validation
 if(messageInput.value.trim() === ""){
            messageError.textContent = "Message is required";
            isValid = false;
        }
if(messageInput.value.trim(). lenght <10){
    messageError.textContent = "Message must be at least 10 characters";
    isValid=false;
}
//step 6 final check
if (isValid){
    successMsg.textContent = "Form submitted successfully"
    successMsg.classListadd("success");
    form.reset();
}
});