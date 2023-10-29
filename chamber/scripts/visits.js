const visitsElement = document.getElementById("visits");

document.addEventListener("DOMContentLoaded", e => {
    const msToDays = 84600000;
    visitsElement.innerHTML = "";
    if (!localStorage.getItem("visit")) {
        visitsElement.innerHTML = "Welcome! Let us know if you have any questions.";
        localStorage.setItem("visit", Date.now());
    }
    else {
        let lastVisit = localStorage.getItem("visit");
        let currentVisit = Date.now();

        if (currentVisit - Number.parseInt(lastVisit) < msToDays) {
            visitsElement.innerHTML = "Back so soon! Awesome!";
            localStorage.setItem("visit", currentVisit);
        }
        else {
            let numberDays = (currentVisit - lastVisit) / msToDays;
            if (numberDays == 1) {
                visitsElement.innerHTML = `You last visited 1 day ago`;
            }
            else {
                visitsElement.innerHTML = `You last visited ${numberDays} days ago`;
            }
        }
    }
});