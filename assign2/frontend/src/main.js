/**
 * Written by A. Hinds with Z. Afzal 2018 for UNSW CSE.
 * 
 * Updated 2019.
 */

// import your own scripts here.
import {first_page} from './first.js';
import {login_page} from './login.js';
import {signup_page} from './signup.js';

// your app must take an apiUrl as an argument --
// this will allow us to verify your apps behaviour with 
// different datasets.
function initApp(apiUrl) {
  // your app initialisation goes here
  first_page(apiUrl);
  
}

export default initApp;
