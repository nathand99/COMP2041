import {logged_in} from './loggedin.js'
import {edit_profile} from './edit_profile.js'
// show the users information
export function profile(apiUrl, auth) {
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
    const create = document.createTextNode("User profile");
    h1.appendChild(create);
    div.appendChild(h1);

    fetch(`${apiUrl}/user/`, {
        method: "GET",
        headers: {
            Authorization: `Token ${auth}`
        }
    }).then(response => {
        return response.json();
    }).then((json) => {
        // id
        const id = document.createElement("div");
        const idText = document.createTextNode(`ID: ${json.id}`);
        id.appendChild(idText);
        div.appendChild(id);
        // username
        const user = document.createElement("div");
        const userText = document.createTextNode(`Username: ${json.username}`);
        user.appendChild(userText);
        div.appendChild(user);
        // name
        const name = document.createElement("div");
        const nameText = document.createTextNode(`Name: ${json.name}`);
        name.appendChild(nameText);
        div.appendChild(name);
        // email
        const email = document.createElement("div");
        const emailText = document.createTextNode(`Email: ${json.email}`);
        email.appendChild(emailText);
        div.appendChild(email);
        // posts
        const post = document.createElement("div");
        const postText = document.createTextNode(`Number of posts: ${json.posts.length}`);
        post.appendChild(postText);
        div.appendChild(post);
        // followers
        const follow = document.createElement("div");
        const followText = document.createTextNode(`Number of followers: ${json.followed_num}`);
        follow.appendChild(followText);
        div.appendChild(follow);
        // following
        const following = document.createElement("div");
        const followingText = document.createTextNode(`Number of users followed: ${json.following.length}`);
        following.appendChild(followingText);
        div.appendChild(following);
    })
    // div to hold buttons
    const buttons = document.createElement("div");
    root.appendChild(buttons);
    // back button
    const back = document.createElement("button");
    back.setAttribute("class", "button button-primary");
    const backText = document.createTextNode("back")
    back.appendChild(backText);
    buttons.appendChild(back);
    // edit 
    const edit = document.createElement("button");
    edit.setAttribute("class", "button button-primary");
    const editText = document.createTextNode("Edit Profile")
    edit.appendChild(editText);
    buttons.appendChild(edit);

    back.addEventListener('click', (event) => {
        logged_in(apiUrl, auth);
    });

    edit.addEventListener('click', (event) => {
        edit_profile(apiUrl, auth);
    });
}