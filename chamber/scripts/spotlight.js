const spotlights = document.getElementById("spotlights");

const getSpotlights = async () => {
    const response = await fetch("https://jarom27.github.io/wdd230/chamber/data/members.json");
    const data = await response.json();
    displaySpotlights(data.members);

}
const displaySpotlights = (members) => {
    const premiumMembers = [];
    members.forEach(member => {

        if (member["membership-level"] == "Gold" || member["membership-level"] == "Silver") {
            premiumMembers.push(member);
        }
    });
    let times = 0;

    premiumMembers.forEach(premium => {
        if (times < 3) {
            let premiumElement = document.createElement("article");
            premiumElement.innerHTML = `
                <img class="brand-image" src = ${premium["brand-image"]} alt="Image for ${premium.name}">
                <h3>${premium.name}</h3>
                <p>${premium.address}</p>
                <strong>${premium["membership-level"]}</strong>
                <p>${premium["phone-numbers"][0]}</p>
                <a href=${premium.website}>Visit Site</a>`
            spotlights.appendChild(premiumElement);
            times++;
        }


    });
}
getSpotlights();