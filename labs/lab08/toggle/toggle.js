(function() {
   'use strict';
   // write your js here.
   setInterval(hide, 2000);
   function hide () {
      const output = document.getElementById('output')
      
      if (output.className === "") {
         output.className = "hide";
      } else {
         output.className = "";
      }      
      //output.classList.toggle("hide");
   }   
}());
