console.log("Hello world from separate file");

const h1Element = document.querySelector('h1');
// const h1Element = document.getElementById('my-heading');
console.log('h1 text: ', h1Element)


// Goal: add a new favorite number Four into the list
const li = document.createElement("li");
const liText = document.createTextNode("Four");
li.appendChild(liText);

const ul = document.getElementById('main-list');
ul.appendChild(li);