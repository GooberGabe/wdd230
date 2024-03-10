const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        console.log("YEET")
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        fullName.innerHTML = prophet.name + " " + prophet.lastname;
        portrait.src = prophet.imageurl;
        portrait.alt = portrait.innerHTML;
        portrait.loading = 'lazy';
        portrait.width = 340;
        portrait.height = 440;

        cards.appendChild(card);
        card.appendChild(fullName);
        card.appendChild(portrait);
    });
}

getProphetData();