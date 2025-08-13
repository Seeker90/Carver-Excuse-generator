let who = ['The dog','My granma','His turtle','My bird']; 
let what = ['ate','pissed','crushed','broked']; 
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];



let randomWho = who[Math.floor(Math.random() * who.length)];
let randomWhat = what[Math.floor(Math.random() * what.length)];
let randomWhen = when[Math.floor(Math.random() * when.length)];

let excuse = `${randomWho} ${randomWhat} ${randomWhen}.`;

document.getElementById("excuse").innerText = excuse;