const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const forescated = document.getElementById("forescated");
const iconElement = document.getElementById("weather-img");
const description = document.getElementById("description");
const LAT = 20.43593686579889;
const LON = -86.92597436997677;
const API_KEY = "164f79f2c4445ab03a818aaf617e2e49";;

const GetWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`)
    const data = await response.json();

    displayWeather(data)
}
const GetForescated = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}`);
    const data = await response.json();
    displayForescated(data.list);
}
const displayWeather = data => {
    temperature.innerHTML = "";
    humidity.innerHTML = "";
    description.innerHTML = "";

    temperature.innerHTML = `${data.main.temp}°F`;
    humidity.innerHTML = `${data.main.humidity}`;
    iconElement.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    description.innerHTML = `${data.weather[0].main}`;

}
const displayForescated = list => {
    forescated.innerHTML = "";
    let firstTime = false;
    list.forEach(fore => {
        let records = fore.dt_txt.split(" ");
        if (records[1] == "15:00:00" && !firstTime) {
            forescated.innerHTML = `${fore.main.temp}°F`;
            firstTime = true;
            return;
        }
    });

}
GetWeather();
GetForescated();