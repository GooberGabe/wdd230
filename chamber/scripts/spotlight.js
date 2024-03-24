//const baseURL = "https://goobergabe.github.io/wdd230/";
const membersURL = "https://goobergabe.github.io/wdd230/chamber/data/members.json";

async function getMembers() 
{
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(data) {

    const spotlight = document.querySelector("#spotlight-content");
    var specialMembers = [];
    for (let i = 0; i < data.members.length; i++) {
        if (data.members[i].membershipLevel > 1) {
            specialMembers.push(data.members[i]);
        }
    }
    var spotlightMembers = [];
    for (let i = 0; i < 3 && specialMembers.length > 0; i++) {
        let r = getRandomInt(specialMembers.length);
        spotlightMembers.push(specialMembers[r])
        specialMembers.splice(r, 1);
    }

    for (let i = 0; i < spotlightMembers.length; i++) {
        let member = spotlightMembers[i];
        spotlight.children.item(i).innerHTML = `
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phoneNumber}</p>
        `;
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

getMembers();