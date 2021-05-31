export default function runApp() {
    /** your code goes here */
    const tab1 = document.getElementById("tab-1");
    tab1.addEventListener('click', (event) => {
        fetchPlanet("Saturn");
    });
    const tab2 = document.getElementById("tab-2");
    tab2.addEventListener('click', (event) => {
        fetchPlanet("Earth");
    });
    const tab3 = document.getElementById("tab-3");
    tab3.addEventListener('click', (event) => {
        fetchPlanet("Juptier");
    });
    const tab4 = document.getElementById("tab-4");
    tab4.addEventListener('click', (event) => {
        fetchPlanet("Mercury");
    });const tab5 = document.getElementById("tab-5");
    tab5.addEventListener('click', (event) => {
        fetchPlanet("Uranus");
    });
    const tab6 = document.getElementById("tab-6");
    tab6.addEventListener('click', (event) => {
        fetchPlanet("Venus");
    });
    const tab7 = document.getElementById("tab-7");
    tab7.addEventListener('click', (event) => {
        fetchPlanet("Mars");
    });
    const tab8 = document.getElementById("tab-8");
    tab8.addEventListener('click', (event) => {
        fetchPlanet("Neptune");
    });
}

function fetchPlanet(planet) {
    fetch('planets.json')
        .then((response) => {
            return response.json();
        }).then((json) => {
            let i = 0;
            while (json[i]) {
                //console.log(json[i].name)
                if (json[i].name === planet) {
                    break;
                }
                i++;
            }
            //console.log(json[i].details)
            const info = document.getElementById("information");
            while (info.firstChild) {
                info.removeChild(info.firstChild);
            }
            const h2 = document.createElement("h2");
            const p = document.createElement("p");
            const title = document.createTextNode(planet);
            h2.appendChild(title);
            const text = document.createTextNode(json[i].details);
            p.appendChild(text);
            info.appendChild(h2);
            info.appendChild(p);

            
        }); 

}