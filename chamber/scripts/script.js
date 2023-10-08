const displayMenu = document.querySelector(".display-menu");
const menu = document.querySelector(".menu");
displayMenu.addEventListener("click", e => {
    displayMenu.classList.toggle("close");
    menu.classList.toggle("inactive");
});
const update = document.getElementById("updated");
update.innerHTML = `${document.lastModified}`;
const year = document.getElementById("year");
year.innerHTML = `©${new Date().getFullYear()} `;