// What if we pass a function sayHello to another function runOurFunction?
//   - sayHello is a callback function
//   - runOurFunction is a higher order function

const runOurFunction = function(callback) {
  console.log("Our higher order function starts!");
  callback();
  console.log("Our higher order function finishes!");
}

const sayHello = function(name) {
  console.log("We are inside sayHello!");
  console.log(`Hello ${name}`);
}

runOurFunction(sayHello);

// A higher order function is also one that returns another function
// const runOurFunction1 = function() {
//   console.log("Our higher order function starts!");
//   console.log("Our higher order function finishes!");

//   return function(){};
// }

