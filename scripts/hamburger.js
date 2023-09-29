const hamburgerMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburgerMenu.addEventListener("click", e => {
    hamburgerMenu.classList.toggle("close");
    navMenu.classList.toggle("inactive");
});