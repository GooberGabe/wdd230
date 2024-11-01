if (!localStorage.getItem("pageVisits")) {
    localStorage.setItem("pageVisits", "0");
}
console.log(localStorage.getItem("pageVisits"))

let visits = parseInt(localStorage.getItem("pageVisits")) + 1;
localStorage.setItem("pageVisits", visits);

document.querySelector("#visits").innerHTML = visits;   