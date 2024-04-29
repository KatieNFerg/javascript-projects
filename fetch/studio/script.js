//TODO: Add Your Code Below
window.addEventListener("load", function () {
    async function fetchAstronauts() {

        const response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json");
        const data = await response.json();

        //console.log(data);
        const container = document.getElementById("container");

        data.sort(function (a, b) {
            return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
        });

        const count = document.getElementById("count");
       // count.innerHTML = `Total astronaut count: ${data.length}`;
        for (let i = 0; i < data.length; i++) {
            let astronaut = data[i];
            container.innerHTML += `
            <div class="astronaut">
            <div class="bio">
            <h3>${astronaut.firstName}  ${astronaut.lastName}</h3>
            <ul>
            <li>Hours in space: ${astronaut.hoursInSpace}</li>
            <li>Active: ${astronaut.active}</li>
            <li>Skills: ${astronaut.skills.join(", ")}</li>
            </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
            </div>
            `;
        }

    }
    fetchAstronauts();
});