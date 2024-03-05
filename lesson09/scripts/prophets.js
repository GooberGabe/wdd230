const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        fullName.innerHTML = prophet.name + " " + prophet.lastName;
    });
}

getProphetData();