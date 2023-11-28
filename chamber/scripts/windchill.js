const API_KEY = "164f79f2c4445ab03a818aaf617e2e49";
const LAT = "29.074846325151412";
const LON = "-110.9697952611194";
let windSpeed = Number.parseFloat(document.getElementById("wind-speed").textContent);
let temperature = Number.parseFloat(document.getElementById("temperature").textContent);
const windchill = document.getElementById("windchill");
const forecastList = document.getElementById("next-forecast");

let CalculateWindchill = () => {
    let v = Math.pow(windSpeed, 0.16)
    return 35.74 + (0.6215 * temperature) - (35.75 * v) + (0.4275 * temperature * v);
};

const getWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`)
    const data = await response.json();

    displayWeather(data)
}
const getForecast = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}`);
    const data = await response.json();
    displayForecast(data);
}
const displayForecast = (data) => {
    // console.log(data);
    let times = 0;
    data.list.forEach((forecast, index) => {
        // console.log(forecast.dt_txt)
        if (index % 8 == 0 && times < 3) {
            let date = document.createElement("h4");
            let forecastElement = document.createElement("li");
            let iconElement = document.createElement("img");
            date.innerHTML = forecast.dt_txt.split(" ")[0];
            iconElement.setAttribute("width", "40");
            iconElement.setAttribute("height", "40");
            iconElement.setAttribute("src", `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`);
            let tempElement = document.createElement("p");
            tempElement.innerHTML = `Min: <span>${forecast.main.temp_min}°F</span> <br><strong>Max:</strong> <span>${forecast.main.temp_max}°F</span>`;
            forecastElement.appendChild(date);
            forecastElement.appendChild(iconElement);
            forecastElement.appendChild(tempElement);
            forecastList.appendChild(forecastElement);
            times++;
        }


    });
}
const displayWeather = (data) => {
    temperature = data.main.temp;
    windSpeed = data.wind.speed;
    document.getElementById("temperature").innerHTML = "";
    document.getElementById("temperature").textContent = temperature;
    document.getElementById("wind-speed").innerHTML = "";
    document.getElementById("wind-speed").textContent = windSpeed;
    document.getElementById("weather-desc").textContent = data.weather[0].main;
    document.getElementById("weather-img").setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`)
    if (temperature <= 50 && windSpeed > 3) {
        windchill.textContent = `${CalculateWindchill().toFixed(2)}°F`;
    }
    else {
        windchill.textContent = "N/A";
    }
}
getWeather();
getForecast();

