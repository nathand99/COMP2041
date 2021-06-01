import {profile} from './profile.js'
// edit the users profile
export function edit_profile(apiUrl, auth) {
    // destroy the page
    const root = document.querySelector("#root");
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
    // header banner
    const header = document.createElement("header");
    header.setAttribute("class", "banner");
    root.appendChild(header);
    // seddit logo
    const logo = document.createElement("h1");
    logo.setAttribute("class", "flex-center");
    logo.setAttribute("id", "logo");
    logo.innerText = "Seddit";
    header.appendChild(logo);
    // seddit
    const seddit = document.createElement("h1");
    seddit.setAttribute("class", "flex-center");
    seddit.innerText = "Seddit";
    seddit.style.paddingRight = "400px";
    seddit.style.fontFamily = "Verdana, Geneva, sans-serif";
    header.appendChild(seddit);
    // object to hold information
    const payload = {};
    // edit account
    const div = document.createElement("div");
    root.appendChild(div);
    const h1 = document.createElement("h1");
    const title = document.createTextNode("Edit your account");
    h1.appendChild(title);
    div.appendChild(h1);
    // email
    const div3 = document.createElement("div");
    root.appendChild(div3);
    const label3 = document.createElement("label");
    const email = document.createTextNode("Email");
    label3.appendChild(email);
    div3.appendChild(label3);
    const input3 = document.createElement("input");
    div3.appendChild(input3);
    // name
    const label1 = document.createElement("label");
    const name = document.createTextNode("Name");
    label1.appendChild(name);
    div.appendChild(label1);
    const input1 = document.createElement("input");
    div.appendChild(input1);
    // password
    const div2 = document.createElement("div");
    root.appendChild(div2);
    const label2 = document.createElement("label");
    const password = document.createTextNode("Password");
    label2.appendChild(password);
    div2.appendChild(label2);
    const input2 = document.createElement("input");
    input2.setAttribute("type", "password");
    const min = document.createTextNode("Minimum 1 character");
    div2.appendChild(input2);
    div2.appendChild(min);
    // back
    const back = document.createElement("button");
    back.setAttribute("class", "button");
    const backText = document.createTextNode("Back To profile");
    back.appendChild(backText);
    root.appendChild(back);   
    // submit
    const submit = document.createElement("button");
    submit.setAttribute("class", "button");
    const button = document.createTextNode("Submit");
    submit.appendChild(button);
    root.appendChild(submit);
    // message div
    const error = document.createElement("div");
    error.setAttribute("id", "error");
    root.appendChild(error);
    // when submit is clicked...
    submit.addEventListener('click', (event) => {
        if (input3.value !== "") {
            payload.email = input3.value;
        }
        if (input1.value !== "") {
            payload.name = input1.value;
        }
        if (input2.value !== "") {
            payload.password = input2.value;
        }
        fetch(`${apiUrl}/user`, {
            method: "PUT",
            headers: {
                Authorization: `Token ${auth}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(response => {
            return response.json();
        }).then((json) => { 
            const newdiv = document.querySelector("#error");
            while (newdiv.firstChild) {
                newdiv.removeChild(newdiv.firstChild);
            }         
            newdiv.setAttribute("class", "")
            // if there is a message, there is an error
            if (json.message) {
                let result = "";
                if (json.message === "Malformed Request") {
                    result = document.createTextNode("One or more fields have an error Please try again");
                } else {
                    result = document.createTextNode(json.message + ". Please try again");
                }

                newdiv.appendChild(result);
                newdiv.setAttribute("class", "error")
                root.appendChild(newdiv);
            // no message means no error
            } else {
                const result = document.createTextNode("Successfully updated details");
                newdiv.appendChild(result);
                newdiv.setAttribute("class", "success")
                root.appendChild(newdiv);
            }
        })
    });
    back.addEventListener('click', (event) => {
        profile(apiUrl, auth);
    });
}