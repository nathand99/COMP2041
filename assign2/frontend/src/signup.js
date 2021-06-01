import {logged_in} from './loggedin.js'
import {first_page} from './first.js'
// this is a signup page
export function signup_page(apiUrl) {
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
    // create account
    const div = document.createElement("div");
    root.appendChild(div);
    const h1 = document.createElement("h1");
    const title = document.createTextNode("Create an account");
    h1.appendChild(title);
    div.appendChild(h1);
    // username
    const label1 = document.createElement("label");
    const username = document.createTextNode("Username*");
    label1.appendChild(username);
    div.appendChild(label1);
    const input1 = document.createElement("input");
    div.appendChild(input1);
    // password
    const div2 = document.createElement("div");
    root.appendChild(div2);
    const label2 = document.createElement("label");
    const password = document.createTextNode("Password*");
    label2.appendChild(password);
    div2.appendChild(label2);
    const input2 = document.createElement("input");
    input2.setAttribute("type", "password");
    div2.appendChild(input2);
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
    const div4 = document.createElement("div");
    root.appendChild(div4);
    const label4 = document.createElement("label");
    const name = document.createTextNode("Name");
    label4.appendChild(name);
    div4.appendChild(label4);
    const input4 = document.createElement("input");
    div4.appendChild(input4);
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

    let auth = "";
    submit.addEventListener('click', (event) => {
        fetch(`${apiUrl}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: input1.value,
                password: input2.value,
                email: input3.value,
                name: input4.value
            })
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
                const result = document.createTextNode("Successfully created account. You will now be logged in");
                newdiv.appendChild(result);
                newdiv.setAttribute("class", "success")
                root.appendChild(newdiv);
                auth = json.token;
                window.setTimeout(function() {
                    logged_in(apiUrl, auth)
                  }, 2000);
            }
        })
    });
    back.addEventListener('click', (event) => {
        first_page(apiUrl);
    });
}