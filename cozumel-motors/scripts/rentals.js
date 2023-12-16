const rentalsGrid = document.getElementById("rentals-grid");

const GetRentals = async () => {
    let response = await fetch("https://jarom27.github.io/wdd230/cozumel-motors/data/rentals.json");
    let data = await response.json();

    DisplayCards(data)
}
const DisplayCards = (data) => {
    rentalsGrid.innerHTML = "";
    data.rentals[0].scooters.forEach(rentalType => {
        console.log(rentalType)
        let article = document.createElement("article");
        let titleRental = document.createElement("h3");
        let typeRental = document.createElement("p");
        let imageRental = document.createElement("img");
        let maxPassengers = document.createElement("p");
        let division = document.createElement("div");


        titleRental.innerHTML = rentalType.vehicle;
        typeRental.innerHTML = `Type Rental: <strong>${rentalType.rentalType}</strong>`;
        imageRental.setAttribute("src", `${rentalType.image}`);
        maxPassengers.innerHTML = `Max Passengers: <strong>${rentalType.passengers}</strong>`;
        division.innerHTML = `
        <h4>Reservation</h4>
        <div>
            <p>Half Time (3 hours): <strong>$${rentalType.prices[0].reservation[0].cost}</strong></p>
            <p>Full Time: <strong>$${rentalType.prices[0].reservation[1].cost}</strong></p>
        </div>
        <h4>Walk-In</h4>
        <div>
            <p>Half Time (3 hours): <strong>$${rentalType.prices[1]["Walk-In"][0].cost}</strong></p>
            <p>Full Time: <strong>$${rentalType.prices[1]["Walk-In"][1].cost}</strong></p>
        </div>
        `
        division.style.textAlign = "center";
        article.appendChild(imageRental);
        article.appendChild(titleRental);
        article.appendChild(typeRental);
        article.appendChild(maxPassengers);
        article.appendChild(division);
        rentalsGrid.appendChild(article);
    });
    data.rentals[0].ATVs.forEach(rentalType => {
        console.log(rentalType)
        let article = document.createElement("article");
        let titleRental = document.createElement("h3");
        let typeRental = document.createElement("p");
        let imageRental = document.createElement("img");
        let maxPassengers = document.createElement("p");
        let division = document.createElement("div");


        titleRental.innerHTML = rentalType.vehicle;
        typeRental.innerHTML = `Type Rental: <strong>${rentalType.rentalType}</strong>`;
        imageRental.setAttribute("src", `${rentalType.image}`);
        maxPassengers.innerHTML = `Max Passengers: <strong>${rentalType.passengers}</strong>`;
        division.innerHTML = `
        <h4>Reservation</h4>
        <div>
            <p>Half Time (3 hours): <strong>$${rentalType.prices[0].reservation[0].cost}</strong></p>
            <p>Full Time: <strong>$${rentalType.prices[0].reservation[1].cost}</strong></p>
        </div>
        <h4>Walk-In</h4>
        <div>
            <p>Half Time (3 hours): <strong>$${rentalType.prices[1]["Walk-In"][0].cost}</strong></p>
            <p>Full Time: <strong>$${rentalType.prices[1]["Walk-In"][1].cost}</strong></p>
        </div>
        `
        division.style.textAlign = "center";
        article.appendChild(imageRental);
        article.appendChild(titleRental);
        article.appendChild(typeRental);
        article.appendChild(maxPassengers);
        article.appendChild(division);
        rentalsGrid.appendChild(article);
    });
    data.rentals[0].Jeeps.forEach(rentalType => {
        console.log(rentalType)
        let article = document.createElement("article");
        let titleRental = document.createElement("h3");
        let typeRental = document.createElement("p");
        let imageRental = document.createElement("img");
        let maxPassengers = document.createElement("p");
        let division = document.createElement("div");


        titleRental.innerHTML = rentalType.vehicle;
        typeRental.innerHTML = `Type Rental: <strong>${rentalType.rentalType}</strong>`;
        imageRental.setAttribute("src", `${rentalType.image}`);
        maxPassengers.innerHTML = `Max Passengers: <strong>${rentalType.passengers}</strong>`;
        division.innerHTML = `
        <h4>Reservation</h4>
        <div>
            <p>Half Time (3 hours): <strong>$${rentalType.prices[0].reservation[0].cost}</strong></p>
            <p>Full Time: <strong>$${rentalType.prices[0].reservation[1].cost}</strong></p>
        </div>
        <h4>Walk-In</h4>
        <div>
            <p>Half Time (3 hours): <strong>$${rentalType.prices[1]["Walk-In"][0].cost}</strong></p>
            <p>Full Time: <strong>$${rentalType.prices[1]["Walk-In"][1].cost}</strong></p>
        </div>
        `
        division.style.textAlign = "center";
        article.appendChild(imageRental);
        article.appendChild(titleRental);
        article.appendChild(typeRental);
        article.appendChild(maxPassengers);
        article.appendChild(division);
        rentalsGrid.appendChild(article);
    });

}
GetRentals();