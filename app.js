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
