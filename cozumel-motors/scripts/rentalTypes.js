const rentalTypeSelect = document.getElementById("rental-type");

const GetTypeRentals = async () => {
    let response = await fetch("https://jarom27.github.io/wdd230/cozumel-motors/data/rentals.json")
    let data = await response.json();
    DisplaySelect(data);
}
const DisplaySelect = (data) => {
    let types = [];

    data.rentals[0].scooters.forEach(type => {
        types.push(type.rentalType)
    })
    data.rentals[0].ATVs.forEach(type => {
        types.push(type.rentalType)
    })
    data.rentals[0].Jeeps.forEach(type => {
        types.push(type.rentalType)
    })
    types.forEach(type => {
        let option = document.createElement("option");
        option.value = type;
        option.innerHTML = type;
        rentalTypeSelect.appendChild(option);
    })
}
GetTypeRentals();