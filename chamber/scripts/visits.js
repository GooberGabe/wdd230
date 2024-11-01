const dayLength = 84600000;

var message = "Welcome back!"
if (!localStorage.getItem("pageVisits")) {
    message = "If you have any questions, feel free to reach out."
} else {
    let lastVisit = parseInt(localStorage.getItem("pageVisits"));
    if (Date.now() - lastVisit < dayLength) {
        message = "Back so soon! Awesome!"
    } else {
        let days = Math.round((Date.now() - lastVisit) / dayLength);
        message = `You last visited ${days} day${days > 1 ? 's' : ''} ago.`
    }
}

document.querySelector("#welcome p").innerHTML = message;   
localStorage.setItem("pageVisits", Date.now());