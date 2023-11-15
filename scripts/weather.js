const API_KEY = "164f79f2c4445ab03a818aaf617e2e49";
const LAT = "29.074846325151412";
const LON = "-110.9697952611194";
const weather = document.getElementById("weather");
const iconElement = document.getElementById("icon");
const getWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    displayWeather(data);
}
const displayWeather = (data) => {
    let currentWeatherDescription = data.weather[0].description;
    let currentTemp = data.main.temp;
    let icon = data.weather[0].icon;
    let formatCorrect = currentWeatherDescription[0].toUpperCase() + currentWeatherDescription.slice(1);
    iconElement.setAttribute("src", `https://openweathermap.org/img/w/${icon}.png`);
    weather.innerHTML = "";
    weather.textContent = `${currentTemp} - ${formatCorrect}`;
}
getWeather();