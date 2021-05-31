export default function runApp() {
    /** your code goes here */
    // fetch from this link. WE then get a response. WE want this response in JSON
    // then we do what we want with the json
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    }).then((json) => {
        const output = document.getElementById("output");
        let i = 0;
        while (json[i]) {
            const div = document.createElement('div');
            div.setAttribute("class", "user");
            output.appendChild(div);
            const name = document.createTextNode(json[i].name);
            const company = document.createTextNode(json[i].company.catchPhrase);
            div.appendChild(name);
            div.innerText += "\n";
            div.appendChild(company);
            i++;
        }
    }); 
    
}