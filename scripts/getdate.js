let lastModified = document.lastModified;
document.querySelector('#lastModified').innerHTML = `Last Modified: ${lastModified}`;
let date = new Date(lastModified);
document.querySelector('#copyright').innerHTML = `© ${date.getFullYear()} | Gabe Lytle | Rexburg, Idaho`