const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const API_KEY = '1184a90aee199bd2fdfa0ea4c5d68101';
const CITY_ID = '2821164';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${API_KEY}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(API_URL); 
        if (response.ok) {
            const data = await response.json();
            console.log(data); 
            
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayResults(data) {
    currentTemp.textContent = Math.round(data.main.temp);
    
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    
    captionDesc.textContent = desc
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

apiFetch();