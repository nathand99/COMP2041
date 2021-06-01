import {logged_in} from './loggedin.js'
import {first_page} from './first.js'
// this is a login page
export function login_page(apiUrl) {
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
    const sedditText = document.createTextNode("Seddit");
    const logo = document.createElement("h1");
    logo.setAttribute("class", "flex-center");
    logo.setAttribute("id", "logo");
    logo.innerText = "seddit";
    //logo.appendChild(sedditText);
    header.appendChild(logo);
    // seddit
    const seddit = document.createElement("h1");
    seddit.setAttribute("class", "flex-center");
    seddit.appendChild(sedditText);
    seddit.style.fontFamily = "Verdana, Geneva, sans-serif";
    header.appendChild(seddit);
    // username
    const div1 = document.createElement("div");
    root.appendChild(div1);
    const h1 = document.createElement("h1");
    const title = document.createTextNode("Log in to your account");
    h1.appendChild(title);
    div1.appendChild(h1);
    const label1 = document.createElement("label");
    const username = document.createTextNode("Username");
    label1.appendChild(username);
    div1.appendChild(label1);
    const input1 = document.createElement("input");
    div1.appendChild(input1);
    // password
    const div2 = document.createElement("div");
    root.appendChild(div2);
    const label2 = document.createElement("label");
    const password = document.createTextNode("Password");
    label2.appendChild(password);
    div2.appendChild(label2);
    const input2 = document.createElement("input");
    input2.setAttribute("type", "password");
    div2.appendChild(input2);
    // back button
    const back = document.createElement("button");
    back.setAttribute("class", "button button-primary");
    const backText = document.createTextNode("back")
    back.appendChild(backText);
    root.appendChild(back);
    // submit button
    const submit = document.createElement("button");
    submit.setAttribute("class", "button button-primary");
    const button = document.createTextNode("Submit");
    submit.appendChild(button);
    root.appendChild(submit);
    // error/success
    const error = document.createElement("div");
    error.setAttribute("id", "error");
    root.appendChild(error);

    submit.addEventListener('click', (event) => {
        const user = input1.value;
        const pass = input2.value;
        let auth = "";
        fetch(`${apiUrl}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: user,
                password: pass
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
            // no message means no error - log them in then take them to their feed
            } else {
                const result = document.createTextNode("Login success: You will now be logged in");
                newdiv.appendChild(result);
                newdiv.setAttribute("class", "success")
                root.appendChild(newdiv);
                auth = json.token;
                window.setTimeout(function() {
                    logged_in(apiUrl, auth)
                }, 1000);
            }
        })
    });   
    back.addEventListener('click', (event) => {
        first_page(apiUrl);
    });
}