let homeLink = document.getElementById("homeLink");
let aboutLink = document.getElementById("aboutLink");
let skillsLink = document.getElementById("skillsLink");
let educationLink = document.getElementById("educationLink");
let servicesLink = document.getElementById("servicesLink");
let projectsLink = document.getElementById("projectsLink");
let contactLink = document.getElementById("contactLink");

homeLink.addEventListener("click",function(){
    homeLink.style.color = "tomato";
    homeLink.style.borderBottom = "3px solid var(--main-color)";
    aboutLink.style.color = "white";
    aboutLink.style.borderBottom = "none";
    skillsLink.style.color = "white";
    skillsLink.style.borderBottom = "none";
    educationLink.style.color = "white";
    educationLink.style.borderBottom = "none";
    servicesLink.style.color = "white";
    servicesLink.style.borderBottom = "none";
    projectsLink.style.color = "white";
    projectsLink.style.borderBottom = "none";
    contactLink.style.color = "white";
    contactLink.style.borderBottom = "none";
})
aboutLink.addEventListener("click",function(){
    aboutLink.style.color = "tomato";
    aboutLink.style.borderBottom = "3px solid var(--main-color)";
    homeLink.style.color = "white";
    homeLink.style.borderBottom = "none";
    skillsLink.style.color = "white";
    skillsLink.style.borderBottom = "none";
    educationLink.style.color = "white";
    educationLink.style.borderBottom = "none";
    servicesLink.style.color = "white";
    servicesLink.style.borderBottom = "none";
    projectsLink.style.color = "white";
    projectsLink.style.borderBottom = "none";
    contactLink.style.color = "white";
    contactLink.style.borderBottom = "none";
})
skillsLink.addEventListener("click",function(){
    skillsLink.style.color = "tomato";
    skillsLink.style.borderBottom = "3px solid var(--main-color)";
    homeLink.style.color = "white";
    homeLink.style.borderBottom = "none";
    aboutLink.style.color = "white";
    aboutLink.style.borderBottom = "none";
    educationLink.style.color = "white";
    educationLink.style.borderBottom = "none";
    servicesLink.style.color = "white";
    servicesLink.style.borderBottom = "none";
    projectsLink.style.color = "white";
    projectsLink.style.borderBottom = "none";
    contactLink.style.color = "white";
    contactLink.style.borderBottom = "none";
})
educationLink.addEventListener("click",function(){
    educationLink.style.color = "tomato";
    educationLink.style.borderBottom = "3px solid var(--main-color)";
    homeLink.style.color = "white";
    homeLink.style.borderBottom = "none";
    aboutLink.style.color = "white";
    aboutLink.style.borderBottom = "none";
    skillsLink.style.color = "white";
    skillsLink.style.borderBottom = "none";
    servicesLink.style.color = "white";
    servicesLink.style.borderBottom = "none";
    projectsLink.style.color = "white";
    projectsLink.style.borderBottom = "none";
    contactLink.style.color = "white";
    contactLink.style.borderBottom = "none";
})
servicesLink.addEventListener("click",function(){
    servicesLink.style.color = "tomato";
    servicesLink.style.borderBottom = "3px solid var(--main-color)";
    homeLink.style.color = "white";
    homeLink.style.borderBottom = "none";
    aboutLink.style.color = "white";
    aboutLink.style.borderBottom = "none";
    skillsLink.style.color = "white";
    skillsLink.style.borderBottom = "none";
    educationLink.style.color = "white";
    educationLink.style.borderBottom = "none";
    projectsLink.style.color = "white";
    projectsLink.style.borderBottom = "none";
    contactLink.style.color = "white";
    contactLink.style.borderBottom = "none";
})
projectsLink.addEventListener("click",function(){
    projectsLink.style.color = "tomato";
    projectsLink.style.borderBottom = "3px solid var(--main-color)";
    homeLink.style.color = "white";
    homeLink.style.borderBottom = "none";
    aboutLink.style.color = "white";
    aboutLink.style.borderBottom = "none";
    skillsLink.style.color = "white";
    skillsLink.style.borderBottom = "none";
    educationLink.style.color = "white";
    educationLink.style.borderBottom = "none";
    servicesLink.style.color = "white";
    servicesLink.style.borderBottom = "none";
    contactLink.style.color = "white";
    contactLink.style.borderBottom = "none";
})
contactLink.addEventListener("click",function(){
    contactLink.style.color = "tomato";
    contactLink.style.borderBottom = "3px solid var(--main-color)";
    homeLink.style.color = "white";
    homeLink.style.borderBottom = "none";
    aboutLink.style.color = "white";
    aboutLink.style.borderBottom = "none";
    skillsLink.style.color = "white";
    skillsLink.style.borderBottom = "none";
    educationLink.style.color = "white";
    educationLink.style.borderBottom = "none";
    servicesLink.style.color = "white";
    servicesLink.style.borderBottom = "none";
    projectsLink.style.color = "white";
    projectsLink.style.borderBottom = "none";
})

// Typing Animation 

var typed = new Typed('#element1', {
    strings: ['Kasif','Kasif.','Kasif','Kasif.','Kasif','Kasif.','Kasif','Kasif.','Kasif','Kasif.','Kasif','Kasif.','Kasif','Kasif.'],
    typeSpeed: 100,
});
var typed = new Typed('#element2', {
    strings: ['Coder.','Programmer.','Web Developer.','Frontend Developer.','Web Designer.'],
    typeSpeed: 100,
});
// var typed = new Typed('#element3', {
//     strings: ['🩷','❤️','🧡','💛','💚','🩵','💙','💜','🩶','🤍','🤎','❤️‍🔥','❤️‍🩹','❣️','💕','💞','💓','💗','💖','💘','💝'],
//     typeSpeed: 100,
// });
    // Using Simple Function
// Navbar Change Icon
// let changeIcon = function(icon){
//     icon.classList.toggle('fa-xmark');
// }
    // Using Arrow Function
changeIcon = (icon) => icon.classList.toggle('fa-xmark');

// Navbar
function toggleMenu(){
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');   
}
document.getElementById('menu-icon').addEventListener('click',toggleMenu);
// Copyright
document.getElementById("copyright").innerHTML="&copy; Copyright " + new Date().getFullYear()+" | All Rights Reserved.";
