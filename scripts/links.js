const baseURL = "https://goobergabe.github.io/wdd230/";
const linksURL = "https://goobergabe.github.io/wdd230/data/links.json";

async function getLinks() 
{
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(data) 
{
    for (let i = 0; i < data.lessons.length; i++) 
    {
        const datum = data.lessons[i];
        const li = document.createElement("li");
        li.innerHTML = "Lesson "+datum.lesson+": ";
        document.querySelector("#lessons").appendChild(li);

        for (let i2 = 0; i2 < datum.links.length; i2++)
        {
            const l = datum.links[i2];
            const link = document.createElement("a");
            link.href = l.url;
            link.innerHTML = l.title+(i2 == datum.links.length - 1 ? "" : " | ");
            li.appendChild(link);
        }
    }
}

getLinks();