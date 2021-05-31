export default function runApp() {
    pictures();
    const button = document.getElementById("more");
    button.addEventListener('click', (event) => {
        pictures();
    });
    
    
}

function pictures() {
    const output = document.getElementById("output");
    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }
    let i = 0;
    while (i < 5) {
        fetch('https://picsum.photos/200/300/?random')
        .then((response) => {
            return response.blob();
        }).then((blob) => {
            const div = document.createElement("div");
            div.setAttribute("class", "img-post");
            const img = document.createElement("img");          
            var objectURL = URL.createObjectURL(blob);
            img.src = objectURL;
            output.appendChild(div);
            div.appendChild(img);
        }); 
        i++;
    }


}