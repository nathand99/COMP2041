import {login_page} from './login.js';
import {signup_page} from './signup.js';
import { create_feed_public } from './create_feed_public.js';

export function first_page(apiUrl) {
    // delete all children of root (clear the page)
    const root = document.querySelector("#root");
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
    // create a title, login and registration button
    const header = document.createElement("header");
    header.setAttribute("class", "banner");
    root.appendChild(header);

    const title = document.createElement("h1");
    const sedditText = document.createTextNode("Seddit");
    //title.appendChild(sedditText);
    title.setAttribute("class", "flex-center");
    title.setAttribute("id", "logo");   
    title.innerText = "Seddit";
    header.appendChild(title);

    const seddit = document.createElement("h1");
    seddit.setAttribute("class", "flex-center");
    seddit.appendChild(sedditText);
    seddit.style.paddingRight = "1100px";
    seddit.style.fontFamily = "Verdana, Geneva, sans-serif";
    header.appendChild(seddit);
    // login button
    const login = document.createElement("button");
    login.setAttribute("data-id-login", "");
    login.setAttribute("class", "button button-primary");
    const loginText = document.createTextNode("Log In")
    login.appendChild(loginText);
    header.appendChild(login);
    // signup button
    const signup = document.createElement("button");
    signup.setAttribute("data-id-signup", "");
    signup.setAttribute("class", "button button-primary");
    const signupText = document.createTextNode("Sign up")
    signup.appendChild(signupText);
    header.appendChild(signup);

    // create feed as a public user
    create_feed_public(apiUrl, "");

    login.addEventListener('click', (event) => {
        login_page(apiUrl);
    });

    signup.addEventListener('click', (event) => {
        signup_page(apiUrl);
    });
}