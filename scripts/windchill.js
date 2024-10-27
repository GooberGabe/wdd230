const baseURL = "https://goobergabe.github.io/wdd230/";
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=39.57&lon=-84.23&appid=1184a90aee199bd2fdfa0ea4c5d68101";

var tempDisplay = document.querySelector("#temp");
var windDisplay = document.querySelector("#wind");
var chillDisplay = document.querySelector("#chill");

function getTemp() {
    return 40;
}

function getWindChill() {
    temperature = parseInt(tempDisplay.innerHTML);
    windSpeed = parseInt(windDisplay.innerHTML);

    v = windSpeed ** 0.16;

    if (temperature < 50 && windSpeed > 3) 
    {
        return Math.round(35.74 + (0.6215 * temperature) - (35.75 * v) + (0.4275 * temperature * v));
    }
    return "N/A";
}

chillDisplay.innerHTML = getWindChill();



