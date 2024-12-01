const themeButton = document.querySelector("#themeToggle");
const r = document.querySelector(':root');
var rs = getComputedStyle(r);
document.querySelector('#lastModified').textContent = `Last updated: ${document.lastModified}`;

var theme = "light";

var defaultTextColor = rs.getPropertyValue("--text-color");
var defaultBackgroundColor = rs.getPropertyValue("--page-background");
var defaultCardBackground = rs.getPropertyValue("--card-background");
var defaultSpotlightColor = rs.getPropertyValue("--spotlight-color");

darkTextColor = "white";
darkBackgroundColor = "#2B2B2B";
darkCardBackground = "#333333";
darkSpotlightColor = "#666666";

themeButton.addEventListener("click", () => {
    
    if (theme == "light") {
        theme = "dark";
        r.style.setProperty('--text-color', darkTextColor);
        r.style.setProperty('--page-background', darkBackgroundColor);
        r.style.setProperty('--card-background', darkCardBackground);
        r.style.setProperty('--spotlight-color', darkSpotlightColor);
    }
    else {
        theme = "light";
        r.style.setProperty('--text-color', defaultTextColor);
        r.style.setProperty('--page-background', defaultBackgroundColor);
        r.style.setProperty('--card-background', defaultCardBackground);
        r.style.setProperty('--spotlight-color', defaultSpotlightColor);
    }
})

function banner() {
    let date = new Date();
    if (date.getDay() == 1 || date.getDay() == 2 || date.getDay() == 3) 
    {
        const banner = document.querySelector("#banner");
        console.log("yarg")
        const h2 = document.createElement("h2");
        h2.innerHTML = "Join us for the chamber of commerce meet and greet on Wednesday at 7:00 p.m!"
        h2.style.textAlign = "center";
        const x = document.createElement("input");
        x.type = "button";
        x.style.border = "none";
        x.value = "X"
        x.addEventListener('click', () => { 
            banner.remove();
        });
        banner.appendChild(x);
        banner.appendChild(h2);
    }
}

const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('nav');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
    console.log("hi")
});

banner();