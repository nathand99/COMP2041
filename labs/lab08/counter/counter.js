(function() {
   'use strict';
   // write your code here
   
   function clock () {
      const output = document.querySelector('#output');
      const text = document.createTextNode(Date());
      if (output.hasChildNodes()) {
         output.removeChild(output.firstChild);
      }
      output.appendChild(text);
   }
   
   const tick = setInterval(clock, 1000);
}());
