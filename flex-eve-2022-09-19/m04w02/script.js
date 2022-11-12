// console.log("SANITY CHECK: JS LOADED");

console.log("Before title:", document.title)
document.title = "This is a new title"
console.log("After title:", document.title)

console.log("document.body is: ", document.body)

// print out <h1> tag text value
console.log('h1 text:', document.querySelector('h1'))


document.querySelector('h1')
document.getElementById('welcome')

// add an item in the list
const li = document.createElement("li");
const liText = document.createTextNode("Four");
li.appendChild(liText)
const ul = document.getElementById("main-list"); //ul
ul.appendChild(li)

// DOM Events
const h1 = document.querySelector("h1"); // returns DOM element
h1.addEventListener('click', (event) => {
  window.alert('h1 is clicked')
})

// const mouseMoveHandler = (event) => {
//   console.log(event)
// }

// document.addEventListener('mousemove', mouseMoveHandler)



