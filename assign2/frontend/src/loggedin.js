import {create_feed} from './create_feed.js'
import {make_post} from './make_post.js'
import {profile} from './profile.js'
import { first_page } from './first.js';
// create page for logged in user
export function logged_in(apiUrl, auth) {
    // delete all children of root (clear the page)
    const root = document.querySelector("#root");
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
    // create banner
    const header = document.createElement("header");
    header.setAttribute("class", "banner");
    root.appendChild(header);

    const title = document.createElement("h1");
    title.setAttribute("class", "flex-center");
    title.setAttribute("id", "logo");
    title.innerHTML = "Seddit";
    header.appendChild(title);

    const sedditText = document.createTextNode("Seddit");

    const seddit = document.createElement("h1");
    seddit.setAttribute("class", "flex-center");
    seddit.appendChild(sedditText);
    seddit.style.paddingRight = "1000px";
    seddit.style.fontFamily = "Verdana, Geneva, sans-serif";
    header.appendChild(seddit);
    // post button
    const post = document.createElement("button");
    post.setAttribute("class", "button button-primary");
    const postText = document.createTextNode("Post")
    post.appendChild(postText);
    header.appendChild(post);
    // profile button
    const profileB = document.createElement("button");
    profileB.setAttribute("class", "button button-primary");
    const profileText = document.createTextNode("Profile")
    profileB.appendChild(profileText);
    header.appendChild(profileB);
    // logout button
    const logout = document.createElement("button");
    logout.setAttribute("class", "button button-primary");
    const logoutText = document.createTextNode("logout")
    logout.appendChild(logoutText);
    header.appendChild(logout);

    // create user's feed
    create_feed(apiUrl, auth);

    post.addEventListener('click', (event) => {
        make_post(apiUrl, auth);
    });

    profileB.addEventListener('click', (event) => {
        profile(apiUrl, auth);
    });

    logout.addEventListener('click', (event) => {
        first_page(apiUrl);
    });
}