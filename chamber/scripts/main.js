const themeButton = document.querySelector(".switch");
console.log(document.querySelector("body"));

const style = window.getComputedStyle(document.body);

var theme = "light";

var defaultTextColor = style.getPropertyValue("--text-color");
var defaultBackgroundColor = style.getPropertyValue("--page-background");
var defaultCardBackground = style.getPropertyValue("--card-background");
var defaultSpotlightColor = style.getPropertyValue("--spotlight-color");

darkTextColor = "white";
darkBackgroundColor = "#2B2B2B";
darkCardBackground = "#333333";
darkSpotlightColor = "#666666";

themeButton.addEventListener("click", () => {
    
    if (theme == "light") {
        theme = "dark";
        style.color = "black";
    }
    else {
        theme = "light";
        style.setProperty('--text-color', defaultTextColor);
        style.setProperty('--page-background', defaultBackgroundColor);
        style.setProperty('--card-background', defaultCardBackground);
        style.setProperty('--spotlight-color', defaultSpotlightColor);
    }
})