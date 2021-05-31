(function() {
  'use strict';
  // TODO: Write some js
  const button1 = document.getElementById("item-1");
  const text1 = document.getElementById("item-1-content");
  button1.addEventListener('click', (event) => {
    if (text1.hidden === false) {
      text1.hidden = true;
      button1.removeChild(button1.firstChild);
      const text = document.createTextNode("expand_more");
      button1.appendChild(text);
    } else {
      text1.hidden = false;
      button1.removeChild(button1.firstChild);
      const text = document.createTextNode("expand_less");
      button1.appendChild(text);
    }
  });
  const button2 = document.getElementById("item-2");
  const text2 = document.getElementById("item-2-content");
  button2.addEventListener('click', (event) => {
    if (text2.hidden === false) {
      text2.hidden = true;
      button2.removeChild(button2.firstChild);
      const text = document.createTextNode("expand_more");
      button2.appendChild(text);
    } else {
      text2.hidden = false;
      button2.removeChild(button2.firstChild);
      const text = document.createTextNode("expand_less");
      button2.appendChild(text);
    }
  });
}());
