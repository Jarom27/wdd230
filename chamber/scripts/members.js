const bussiness = document.getElementById("bussiness");
const url = "https://jarom27.github.io/wdd230/chamber/data/members.json";
let isGrid = true;
let membersList = [];
const getBussiness = async () => {
    const response = await fetch(url);
    const data = await response.json();
    membersList = data.members;
    displayBussiness(data.members);
}
const displayBussiness = (members) => {
    bussiness.innerHTML = "";
    bussiness.classList.remove("table");
    bussiness.classList.add("bussiness");
    members.forEach(member => {
        console.log(member);
        let liElement = document.createElement("li");
        // let card = `<section class = "member-card">
        //     <img src = ${member["brand-image"]}>
        //     <h2>${member.name}</h2>
        //     <p>
        // </section>`;
        let card = document.createElement("section");
        let brandImage = document.createElement("img");
        let memberName = document.createElement("h2");
        let address = document.createElement("p");
        let website = document.createElement("a");
        let phones = document.createElement("ul");
        let membership = document.createElement("h3");
        let containerImage = document.createElement("div");

        memberName.textContent = member.name;
        membership.textContent = member["membership-level"];
        brandImage.setAttribute("src", member["brand-image"]);
        brandImage.setAttribute("width", "200px");
        brandImage.setAttribute("height", "auto");
        containerImage.setAttribute("height", "200px");
        address.textContent = member.address;
        member["phone-numbers"].forEach(phoneNumber => {
            let phoneElement = document.createElement("li");
            phoneElement.textContent = phoneNumber;
            phones.appendChild(phoneElement);
        });
        website.setAttribute("href", member.website)
        website.textContent = "Visit Website";

        containerImage.appendChild(brandImage);
        card.appendChild(containerImage);
        card.appendChild(memberName);
        card.appendChild(membership);
        card.appendChild(address);
        card.appendChild(phones);
        card.appendChild(website);
        card.classList.add("member-card");
        liElement.appendChild(card);
        bussiness.appendChild(liElement);

    });
}
const displayAsList = (members) => {
    let isZebra = false;
    bussiness.innerHTML = "";
    bussiness.classList.add("table")
    bussiness.classList.remove("bussiness");
    let headers = document.createElement("li");
    headers.classList.add("row");
    headers.innerHTML = "<h3>Member</h3><h3>Address</h3><h3>Phone Number</h3><h3>Website</h3>"
    bussiness.appendChild(headers);
    members.forEach(member => {

        let row = document.createElement("li");
        if (isZebra) {
            row.classList.add("zebra");
            isZebra = false;
        }
        else {
            isZebra = true;
        }
        row.classList.add("row");
        row.innerHTML = `<p>${member.name}</p><p>${member.address}</p><p>${member["phone-numbers"][0]}</p><a href=${member.website}>${member.website}</a>`;
        bussiness.appendChild(row);
    });
}
getBussiness();
const gridView = document.getElementById("grid-view");
const listView = document.getElementById("list-view");

gridView.addEventListener("click", (e) => {
    if (!isGrid) {
        gridView.classList.add("active");
        listView.classList.remove("active");
        displayBussiness(membersList);
        isGrid = true;
    }
});
listView.addEventListener("click", e => {
    if (isGrid) {
        gridView.classList.remove("active");
        listView.classList.add("active");
        isGrid = false;
        displayAsList(membersList);
    }
});
