import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let who = ['The dog ','My granma ','His turtle ','My bird ']; 
  let action = ['ate ','pissed ','crushed ','broked ']; 
  let what = ['my homework ', 'my phone ', 'the car '];
  let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


  let randomwho = who[Math.floor(Math.random() * who.length)];
  let randomaction = action[Math.floor(Math.random() * action.length)];
  let randomwhat = what[Math.floor(Math.random() * what.length)];
  let randomwhen = when[Math.floor(Math.random() * when.length)];

  let excuse = randomwho + randomaction + randomwhat + randomwhen;

  document.getElementById("excuse").innerText = excuse;




};
