export default function runApp() {
    /** your code goes here */
    let user_id = 0;
    let ul = 0;
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    }).then((json) => {
        const output = document.getElementById("output");
        let i = 0;
        while (json[i]) {
            // create a div for each user
            const div = document.createElement('div');
            output.appendChild(div);
            div.setAttribute("class", "user");

            const h2 = document.createElement('h2');
            h2.innerText += json[i].name;
            div.appendChild(h2);

            const p = document.createElement('p');
            p.innerText += json[i].company.catchPhrase;
            div.appendChild(p);
 
            ul = document.createElement('ul');
            div.appendChild(ul);
            ul.setAttribute("class", "posts");    
            
            user_id = json[i].id;
 
            //fetch for post
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response)=> {
                return response.json();
            }).then((json)=>{
                let a = 0;
                while(json[a]) {
                    //console.log(json[a]);
                    if (user_id === json[a].userId) {
                        document.createTextNode(json[a].title);
                        console.log(json[a].title);
                        let post = document.createElement("li");
                        post.appendChild(post);
                        ul.appendChild(post);
                    } 
                    a++;
                }
            });

            i++;
        }
    });
}