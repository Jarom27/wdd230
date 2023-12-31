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

/*Dark mode*/
const darkSwitch = document.querySelector(".switch");
const checkbox = document.querySelector(".switch input");
darkSwitch.addEventListener("click", () => {
    const header = document.querySelector("header");
    const logo = document.querySelector("header img")
    if (checkbox.checked == true) {
        header.classList.toggle("dark");
        document.body.classList.toggle("dark");
        logo.src = "images/opt-dark-logo.webp";

    }
    else {
        header.classList.remove("dark");
        document.body.classList.remove("dark");
        logo.src = "images/transparent-logo.webp";
    }
});
