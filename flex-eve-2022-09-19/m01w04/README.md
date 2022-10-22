# W02D04 - Promises
### To Do
- [X] 1. Callback review
- [X] 2. Error handling
- [X] 3. Error handling with callbacks & the "callback hell" problem
- [X] 4. Promises & error handling with Promises

### Callback review
``` js
const waitAndDoSomething = (time, action) => {
  setTimeout(action, time);
};

const sayGoodMorning = () => console.log("Good morning");
const sayGoodAfternoon = () => console.log("Good afternoon");

// waitAndDoSomething(1000, sayGoodMorning);
// waitAndDoSomething(2000, sayGoodAfternoon);

// Are callbacks only used for asynchronous actions? NO, synchronous as well
const repeatAction = (amountOfTimes, action) => {
  for (let i = 0; i < amountOfTimes; i++) {
    action();
  }
}

// repeatAction(10, sayGoodMorning)

// fs example
const fs = require("fs");

const handleFileRead = (err, data) => {
  console.log(data)
}

// WHY?
fs.readFile("./hello.txt", "utf-8", handleFileRead); // async
fs.readFileSync("./hello.txt", "utf-8"); // sync
```

### Error handling

``` js
// Errors?
const sadVariable = 5;

const fs = require("fs");

const contentOfSecret = fs.readFileSync("./secret.json", "utf-8");
const parsedContent = JSON.parse(contentOfSecret); // parse a string into a JS object

try {
  console.log(parsedContent.person.name)

} catch(error) {
  console.log("An error is caught:", error);
}
console.log("CONTINUE AS USUAL");
```

### Promises & error handling with Promises
- Promise: an object that may (or may not) resolve to a value in the future.
- An alternative for easier async programming
- A Promise can be created by the `Promise` class

``` js
const myPromise = new Promise((resolve, reject) => {
  // when operation in this block finishes successfully, resolve is called
  // when operation in this block fails/error out, reject is called
});

myPromise
  .then((data) => {
    // do something with the resolved return value.
  });
```

- Promises help us to avoid the _callback hell_
- Promises also allow us to handle any errors in the _Promise chain_ with a single `.catch()` on the end of the chain
- See how the example in `03-error-handling-callbacks.js` can be rewritten with Promises in `04-promises.js`


