

document.addEventListener("DOMContentLoaded", e => {
    const visitElement = document.getElementById("visits");
    let visits = 1;
    if (localStorage.getItem("visits")) {
        visits = Number.parseInt(localStorage.getItem("visits")) + 1;
    }
    visitElement.innerHTML = "";
    visitElement.innerHTML = visits;
    localStorage.setItem("visits", visits);
    console.log(visits)
});
