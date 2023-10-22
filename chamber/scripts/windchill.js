let windSpeed = Number.parseFloat(document.getElementById("wind-speed").textContent);
let temperature = Number.parseFloat(document.getElementById("temperature").textContent);
const windchill = document.getElementById("windchill");

let CalculateWindchill = () => {
    let v = Math.pow(windSpeed, 0.16)
    return 35.74 + (0.6215 * temperature) - (35.75 * v) + (0.4275 * temperature * v);
};
if (temperature <= 50 && windSpeed > 3) {
    windchill.textContent = `${CalculateWindchill().toFixed(2)}°F`;
}
else {
    windchill.textContent = "N/A";
}
