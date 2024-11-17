const baseURL = "https://goobergabe.github.io/wdd230/";
const membersURL = "https://goobergabe.github.io/wdd230/chamber/data/members.json";

async function getMembers() 
{
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(data) 
{
    for (let i = 0; i < data.members.length; i++) 
    {

        const member = data.members[i];
        const sec = document.createElement("section");
        sec.classList.add("card");
        document.querySelector("#members").appendChild(sec);

        for (let i2 = 0; i2 < member.images.length; i2++)
        {
            const imgUrl = member.images[i2];
            const img = document.createElement("img");
            img.src = imgUrl;
            img.style.maxWidth = "270px";
            sec.appendChild(img);
        }

        const h2 = document.createElement("h2");
        h2.innerHTML = member.name;
        sec.appendChild(h2);

        const p1 = document.createElement("p");
        p1.innerHTML = member.address;
        sec.appendChild(p1);

        const p2 = document.createElement("p");
        p2.innerHTML = member.phoneNumber;
        sec.appendChild(p2);

        const p3 = document.createElement("p");
        p3.innerHTML = "Links: ";
        sec.appendChild(p3);

        const p4 = document.createElement("p");
        p4.innerHTML = ["Basic","Bronze","Silver","Gold"][member.membershipLevel]+" Member";
        sec.appendChild(p4);

        for (let i2 = 0; i2 < member.urls.length; i2++)
        {
            const l = member.urls[i2];
            const link = document.createElement("a");
            link.href = l;
            link.innerHTML = l;
            p3.appendChild(link);
        }
    }
}

getMembers();