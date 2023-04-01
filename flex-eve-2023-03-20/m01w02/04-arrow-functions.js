// Arrow functions

// function declaration
function sayHello0(name) {
  return `Hello there, ${name}!`;
};

// (classic) function expression
const sayHello1 = function(name) {
  return `Hello there, ${name}!`;
};

// arrow function
const sayHello2 = (name) => {
  return `Hello there, ${name}!`;
};

console.log(sayHello0("Duy"));
console.log(sayHello1("Duy"));
console.log(sayHello2("Duy"));

// 1 argument => can exclude the param parenthesis ()
const sayHello3 = name => {
  return `Hello there, ${name}!`;
};
// 1 line of logic in braces => can exclude the curly braces
// 1 line will return implicitly
const sayHello4 = name => `Hello there, ${name}!`;

// goods?
// * shorter
const sum = (x, y) => Number(x) + Number(y);

// bads?
// * different preferences
// * new feature in ES6

// weird?
// * In the context of an object, the "this" keyword in arrow function
// * has a different meaning compared to the other two types of function syntax
// * => Arrow functions should not be used as an object's method

const runOurFunction = function(callback) {
  console.log("Our higher order function starts!");
  callback();
  console.log("Our higher order function finishes!");
}

runOurFunction(name => console.log(`Hello ${name}`));
