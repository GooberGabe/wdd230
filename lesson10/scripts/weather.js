// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?appid=1184a90aee199bd2fdfa0ea4c5d68101&lat=39.577567&long=-84.228150&units=imperial';

async function apiFetch() {
    const response = await fetch(url);
    const data = await response.json();
}

apiFetch();