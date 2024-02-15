const themeButton = document.querySelector("#themeToggle");
const r = document.querySelector(':root');
var rs = getComputedStyle(r);

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
    console.log(true)
})