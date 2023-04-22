const randomPromise1 = new Promise((resolve, reject) => {
  console.log("inside promise definition");
  const randNum = Math.random(); // Generate a num between 0 and 1.

  // This promise should SUCCEED 50% of the time...
  if (randNum > 0.5) {
    console.log("inside success");
    resolve('Success!');
  } else { // and FAIL 50% of the time...
    console.log("inside failure");
    reject('Failure!');
  }
});

console.log("after promise definition");

// How do we use a promise? Call it by name.
randomPromise1
  // A .then() will run if the promise is resolved.
  // .then() takes a callback as an argument.
  // The callback receives the value entered into your resolve()
  .then((message) => {
    console.log(message);
  })
  // A .catch() will run if the promise is rejected.
  // .then() takes a callback as an argument.
  // The callback receives the value entered into your reject()
  .catch((error) => {
    console.log(error);
  });

console.log("the end");

// then() and catch() can be called in a chain; if then() returns a value, that value is passed to the next then() as an argument
const randomPromise2 = new Promise((resolve, reject) => {
    const randNum = Math.random(); // Generate a num between 0 and 1.

    // This promise should SUCCEED 50% of the time...
    if (randNum > 0.5) {
        resolve(randNum);
    } else { // and FAIL 50% of the time...
        reject('Failure!', randNum);
    }
});

randomPromise2
  .then((result) => {
    console.log("I got a good number");
    return result;
  })
  .then((generatedNum) => {
    console.log(generatedNum);
  })
  .catch((error) => {
    console.log(error);
  });