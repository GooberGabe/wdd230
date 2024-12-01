const baseURL = "https://goobergabe.github.io/wdd230/";
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=39.57&lon=-84.23&appid=1184a90aee199bd2fdfa0ea4c5d68101";

async function getWeather() 
{
    const response = await fetch(weatherURL);
    const data = await response.json();
    displayWeather(data);
}

function displayWeather(data) 
{
    console.log(data);
    let t = Math.round(data.main.temp - 273.15);
    let c = data.weather[0].description;
    document.querySelector("#weather p").innerHTML = "The temperature is "+t+" degrees celsius, with "+c+".";
}

getWeather();