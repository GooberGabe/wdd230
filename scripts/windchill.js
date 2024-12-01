const API_KEY = '1184a90aee199bd2fdfa0ea4c5d68101'; 
const CITY_ID = '5605242';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${API_KEY}&units=celsius`;


function getWindChill(tempF, speedMph) {
    if (tempF <= 50 && speedMph > 3) {
        let chill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speedMph, 0.16)) 
                    + (0.4275 * tempF * Math.pow(speedMph, 0.16));
        return Math.round(chill);
    }
    return tempF;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function kelvinToFahrenheit(kelvin) {
    return Math.round((kelvin - 273.15) * 9/5 + 32);
}

function updateWeather() {
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const tempF = kelvinToFahrenheit(data.main.temp);
            document.getElementById('temp').textContent = tempF;

            const windSpeedMph = Math.round(data.wind.speed * 2.237);
            document.getElementById('wind').textContent = windSpeedMph;

            const windChill = getWindChill(tempF, windSpeedMph);
            document.getElementById('chill').textContent = windChill;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('temp').textContent = 'N/A';
            document.getElementById('wind').textContent = 'N/A';
            document.getElementById('chill').textContent = 'N/A';
        });
}



document.addEventListener('DOMContentLoaded', () => {
    updateWeather();
});





