(function() {
    const button1 = document.getElementById("item-1");
    const text1 = document.getElementById("item-1-content");
    button1.addEventListener('click', (event) => {
        text1.hidden = true;
    });

    const button2 = document.getElementById("item-2");
    const text2 = document.getElementById("item-2-content");
    button2.addEventListener('click', (event) => {
        text2.hidden = true;
    });
    
}());
