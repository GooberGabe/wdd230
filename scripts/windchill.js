var tempDisplay = document.querySelector("#temp");
var windDisplay = document.querySelector("#wind");
var chillDisplay = document.querySelector("#chill");

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



