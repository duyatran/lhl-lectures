// Write a function that:
// 1. Accepts two (2) arguments: an `array` and a callback `function`
// 2. Loops through the array, item-by-item
// 3. Executes the callback (passed-in function) on each item
// Basically our own version of Array.forLoop()!

const snacks = ['chips', 'cookies', 'carrots'];

// for (const snack of snacks) {
//   console.log('A snack that I enjoy is', snack);
// }

// Single Responsibility Principle:
// keeps the function focused on one single functionality
const loopThroughArray = (array, cb) => {
  for (const item of array) {
    cb(item);
  }
};

const enjoySnack = (snack) => console.log('A snack that I enjoy is', snack);
loopThroughArray(snacks, enjoySnack);


// What if I call enjoySnack()?
// loopThroughArray(snacks, enjoySnack());
// ret = enjoySnack(); // ret === undefined
// loopThroughArray(snack, ret)


const dislikeSnack = (snack) => console.log('A snack that I dislike is', snack);
loopThroughArray(snacks, dislikeSnack());
