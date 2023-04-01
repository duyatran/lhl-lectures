// Basic function declaration.
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

// Function expression.
const direBonjour = function(name) {
    console.log(`Hello, ${name}!`);
};

const sayHello2 = sayHello;
sayHello("one");
direBonjour('two');

// Store array of functions

const functions = [];
functions.push(sayHello);
functions.push(direBonjour);

console.log(functions);

functions[1]('Michael');

// Execute all funcs in the array?
for(const func of functions) {
    func('Duy');
}
