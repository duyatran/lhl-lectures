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

// Functions do not need to be named
runOurFunction(function() { // an anonymous function
  console.log('Goodbye');
})

// Why are anonymous functions useful?
// (1) Naming is hard
// (2) Localized or one-time use



































