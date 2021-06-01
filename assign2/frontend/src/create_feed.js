// creates feed for logged in user
export function create_feed(apiUrl, auth) {
    // create feed
    const feed = document.createElement("div");
    feed.setAttribute("id", "feed");
    const h3 = document.createElement("h4");
    h3.innerText = "Popular posts";
    feed.appendChild(h3);
    root.appendChild(feed);
    let posts = [];
    // not logged it
    fetch(`${apiUrl}/user/feed`, {
        method: "GET",
        headers: {
            Authorization: `Token ${auth}`
        }
    }).then(response => {
        return response.json();
    }).then((json) => {
        let i = 0;
        while (json.posts[i]) {
            // create div new div to hold post
            const postDiv = document.createElement("div");
            postDiv.setAttribute("class", "post");
            postDiv.setAttribute("data-id-post", "");
            feed.appendChild(postDiv);
            // div to hold seddit, author, time
            const topDiv = document.createElement("div");
            topDiv.style.display = "flex";
            topDiv.setAttribute("class", "topdiv");
            postDiv.appendChild(topDiv);
            //subseddit
            const postSub = document.createElement("p");
            postSub.setAttribute("class", "post-seddit");
            const sub = document.createTextNode(`s/${json.posts[i].meta.subseddit} ·`);
            postSub.appendChild(sub);
            topDiv.appendChild(postSub);
            // author
            const postAuth = document.createElement("p");
            postAuth.setAttribute("class", "post-author");
            postAuth.setAttribute("data-id-author", "");               
            const author = document.createTextNode(`\xa0 Posted by u/${json.posts[i].meta.author}\xa0`);
            postAuth.appendChild(author);
            topDiv.appendChild(postAuth);
            // time
            const postTime = document.createElement("p");
            postTime.setAttribute("class", "post-author");
            const dateObj = new Date(json.posts[i].meta.published * 1000); 
            const utcString = dateObj.toUTCString(); 
            const time = document.createTextNode(`on: ${utcString}`);
            postTime.appendChild(time);
            topDiv.appendChild(postTime);                           
            // title
            const postTitle = document.createElement("h4");
            postTitle.setAttribute("class", "post-title");
            postTitle.setAttribute("data-id-title", "");
            const titleText = document.createTextNode(json.posts[i].title);
            postTitle.appendChild(titleText);
            postDiv.appendChild(postTitle);
            // text
            const postText = document.createElement("p");
            postText.setAttribute("class", "post-content");
            postText.setAttribute("data-id-title", "");               
            const text = document.createTextNode(json.posts[i].text);
            postText.appendChild(text);
            postDiv.appendChild(postText);
            //img
            if (json.posts[i].image !== null && json.posts[i].image !== "") {
                const img = document.createElement("img");  
                img.setAttribute("class", "post-img");    
                img.src = "data:image/jpeg;base64," + json.posts[i].image;
                postDiv.appendChild(img);
            }   
            //like, unlike and comment button
            const likeButtonDiv = document.createElement("div");
            postDiv.appendChild(likeButtonDiv);
            const likeButton = document.createElement("button");            
            const like = document.createTextNode("Like");
            likeButton.appendChild(like);
            const unlikeButton = document.createElement("button");
            const unlike = document.createTextNode("Unlike");
            unlikeButton.appendChild(unlike);
            likeButtonDiv.appendChild(likeButton);
            likeButtonDiv.appendChild(unlikeButton);
            const commentButton = document.createElement("button");
            const comm = document.createTextNode("Comment");
            commentButton.appendChild(comm);
            likeButtonDiv.appendChild(commentButton);
            const postId = json.posts[i].id;
            // like a post
            likeButton.addEventListener('click', (event) => {
                fetch(`${apiUrl}/post/vote/?id=${postId}`, {
                    method: "PUT",
                    headers: {
                        Authorization: `Token ${auth}`
                    }
                }).then(response => {
                    return response.json();
                }).then((json) => {
                });
            });
            // unlike a post
            unlikeButton.addEventListener('click', (event) => {
                fetch(`${apiUrl}/post/vote/?id=${postId}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Token ${auth}`
                    }
                }).then(response => {
                    return response.json();
                }).then((json) => {
                });
            });
            // div for user to add comment
            const addDiv = document.createElement("div");
            postDiv.appendChild(addDiv);
            addDiv.setAttribute("hidden", "");
            const commentInput = document.createElement("textarea");
            commentInput.style.height="100px";
            commentInput.style.width="745px";
            addDiv.appendChild(commentInput);
            const comSubmit = document.createElement("button");
            const submitText = document.createTextNode("Submit")
            comSubmit.appendChild(submitText);
            addDiv.appendChild(comSubmit);
            const msgtag = document.createElement("div");
            addDiv.appendChild(msgtag);
            msgtag.setAttribute("class", "success");
            msgtag.setAttribute("hidden", "");
            const comSuc = document.createTextNode("Successfully posted comment");
            msgtag.appendChild(comSuc);
            // comment button toggles the addDiv
            commentButton.addEventListener('click', (event) => {
                if (addDiv.hidden === true) {
                    addDiv.removeAttribute("hidden");
                } else {
                    addDiv.setAttribute("hidden", "");
                }
            });
            // submit the comment
            comSubmit.addEventListener('click', (event) => {
                if (commentInput.value !== "") {
                    fetch(`${apiUrl}/post/comment/?id=${postId}`, {
                        method: "PUT",
                        headers: {
                            Authorization: `Token ${auth}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            comment: commentInput.value
                        })
                    }).then(response => {
                        return response.json();
                    }).then((json) => {
                        msgtag.removeAttribute("hidden");
                    });
                }
            });
            // div to hold likes and comments
            const likesDiv = document.createElement("div");
            likesDiv.setAttribute("class", "likes-div");
            postDiv.appendChild(likesDiv);
            // likes
            const postLikes = document.createElement("button");
            postLikes.setAttribute("class", "post vote");
            postLikes.setAttribute("data-id-upvotes", "");
            const likes = document.createTextNode(`Likes: ${json.posts[i].meta.upvotes.length}`);
            postLikes.setAttribute("id", `post${json.posts[i].id}`);
            postLikes.appendChild(likes);
            likesDiv.appendChild(postLikes);
            posts.push(json.posts[i].id);            
            // comments
            const postCom = document.createElement("button");
            postCom.setAttribute("class", "post vote");
            postCom.setAttribute("id", `com${json.posts[i].id}`);
            const com = document.createTextNode(`Comments: ${json.posts[i].comments.length}`);
            postCom.appendChild(com);
            likesDiv.appendChild(postCom);
            // div to who liked and commented
            const whoDiv = document.createElement("div");
            //likesDiv.setAttribute("class", "who-div");
            postDiv.appendChild(whoDiv);
            // people who liked
            const postLikesList = document.createElement("div");
            const likedBy = document.createTextNode("Liked by: ");
            postLikesList.appendChild(likedBy);
            postLikesList.setAttribute("hidden", "");
            postLikesList.setAttribute("id", `l${json.posts[i].id}`);
            json.posts[i].meta.upvotes.forEach(element => {
                fetch(`${apiUrl}/user/?id=${element}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Token ${auth}`
                    }
                }).then(response => {
                    return response.json();
                }).then((json) => {
                    const user = document.createTextNode(`${json.name} `);
                    postLikesList.appendChild(user);
                });
                whoDiv.appendChild(postLikesList);
            });
            // people who commented
            const postLikesComments = document.createElement("div");
            postLikesComments.setAttribute("hidden", "");
            postLikesComments.setAttribute("id", `c${json.posts[i].id}`);
            whoDiv.appendChild(postLikesComments);
            json.posts[i].comments.forEach(element => {
                const commentDiv = document.createElement("div");
                commentDiv.setAttribute("class", "who-div");
                postLikesComments.appendChild(commentDiv);
                const commentAuth = document.createElement("p");
                const dateObj = new Date(element.published * 1000); 
                const utcString = dateObj.toUTCString(); 
                const time = document.createTextNode(`${element.author} posted at ${utcString}:`);
                commentAuth.appendChild(time);
                commentDiv.appendChild(commentAuth);
                const commentTextBox = document.createElement("div");
                const commentText = document.createElement("p");
                const text = document.createTextNode(element.comment);
                commentText.appendChild(text);
                commentTextBox.appendChild(commentText);
                commentDiv.appendChild(commentTextBox);
            });
            i++;
        }
        // make an event lister for every like button. When pressed, disables/enables
        // div showing who liked the post
        posts.forEach(element => {
            const like_button = document.getElementById(`post${element}`);
            like_button.addEventListener('click', (event) => {
                const thePost = document.getElementById(`l${element}`);
                if (thePost.hidden === true) {
                    thePost.removeAttribute("hidden");
                } else {
                    thePost.setAttribute("hidden", "");
                }
            });
        });

        posts.forEach(element => {
            const comment_button = document.getElementById(`com${element}`);
            comment_button.addEventListener('click', (event) => {
                const thePost = document.getElementById(`c${element}`);
                if (thePost.hidden === true) {
                    thePost.removeAttribute("hidden");
                    //thePost.setAttribute("active", "");
                    // do something with button when its pressed
                } else {
                    thePost.setAttribute("hidden", "");
                }
            });
        });
    })

}
    