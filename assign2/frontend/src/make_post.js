import {logged_in} from './loggedin.js'
// form to make a post
export function make_post(apiUrl, auth) {
    // delete all children of root (clear the page)
    const root = document.querySelector("#root");
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
    // create banner
    const header = document.createElement("header");
    header.setAttribute("class", "banner");
    root.appendChild(header);

    const logo = document.createElement("h1");
    logo.setAttribute("class", "flex-center");
    logo.setAttribute("id", "logo");
    logo.innerHTML = "Seddit";
    header.appendChild(logo);

    const sedditText = document.createTextNode("Seddit");

    const seddit = document.createElement("h1");
    seddit.setAttribute("class", "flex-center");
    seddit.appendChild(sedditText);
    seddit.style.paddingRight = "400px";
    seddit.style.fontFamily = "Verdana, Geneva, sans-serif";
    header.appendChild(seddit);
    seddit.style.paddingRight = "400px";
    // make a div to hold everything
    const div = document.createElement("div");
    root.appendChild(div);

    const h1 = document.createElement("h1");
    const create = document.createTextNode("Create a post");
    h1.appendChild(create);
    div.appendChild(h1);
    // title
    const label1 = document.createElement("label");
    const title = document.createTextNode("Title*");
    label1.appendChild(title);
    div.appendChild(label1);
    const input1 = document.createElement("input");
    div.appendChild(input1);
    // text
    const div2 = document.createElement("div");
    root.appendChild(div2);
    const label2 = document.createElement("label");
    const text = document.createTextNode("text*");
    label2.appendChild(text);
    div2.appendChild(label2);
    const input2 = document.createElement("input");
    div2.appendChild(input2);
    div.appendChild(div2);
    // subseddit
    const div3 = document.createElement("div");
    root.appendChild(div3);
    const label3 = document.createElement("label");
    const subseddit = document.createTextNode("subseddit");
    label3.appendChild(subseddit);
    div3.appendChild(label3);
    const input3 = document.createElement("input");
    div3.appendChild(input3);
    div.appendChild(div3);
    // image
    const div4 = document.createElement("div");
    root.appendChild(div4);
    const label4 = document.createElement("label");
    const imageText = document.createTextNode("image");
    label4.appendChild(imageText);
    div4.appendChild(label4);
    const input4 = document.createElement("input");
    input4.setAttribute("type", "file");
    input4.setAttribute("id", "image");
    div4.appendChild(input4);
    div.appendChild(div4);
    // back button
    const back = document.createElement("button");
    back.setAttribute("class", "button button-primary");
    const backText = document.createTextNode("back")
    back.appendChild(backText);
    root.appendChild(back);
    // submit
    const submit = document.createElement("button");
    submit.setAttribute("class", "button button-primary");
    const button = document.createTextNode("Submit");
    submit.appendChild(button);
    root.appendChild(submit);
    // message div
    const error = document.createElement("div");
    error.setAttribute("id", "error");
    root.appendChild(error);

    submit.addEventListener('click', (event) => {
        const selectedFile = document.getElementById('image').files[0];
        getBase64(selectedFile).then(
            data => { //console.log(data){
            //console.log(data);
            //data.replace("data:image/png;base64,", "");
            const newD = data.slice(22);
            //console.log(newD);
            fetch(`${apiUrl}/post`, {
                method: "POST",
                headers: {
                    Authorization: `Token ${auth}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: input1.value,
                    text: input2.value,
                    subseddit: input3.value,
                    image: newD
                })
            }).then(response => {
                //console.log(response);
                return response.json();
            }).then((json) => {
                //console.log(json);  
                const newdiv = document.querySelector("#error");
                while (newdiv.firstChild) {
                    newdiv.removeChild(newdiv.firstChild);
                }         
                newdiv.setAttribute("class", "")
                // if there is a message, there is an error
                if (json.message) {
                    let result = "";
                    //console.log(json.message);
                    if (json.message === "Malformed request") {
                        result = document.createTextNode("One or more fields have an error Please try again");
                    } else {
                        result = document.createTextNode(json.message + ". Please try again");
                    }
                    newdiv.appendChild(result);
                    newdiv.setAttribute("class", "error")
                    root.appendChild(newdiv);
                // no message means no error
                } else {
                    const result = document.createTextNode("Successfully created post");
                    newdiv.appendChild(result);
                    newdiv.setAttribute("class", "success")
                    root.appendChild(newdiv);
                }
            })
        });        
    });
    back.addEventListener('click', (event) => {
        logged_in(apiUrl, auth);
    });    
}

// from the lecture slides
function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    })
  }