// Problem:
// Write a JS program that takes in an unlimited number of command line arguments and prints out the sum of them.
// If any argument is not a whole number, skip it.
// If any argument is a negative number, skip it.

const commandLineArgs = process.argv;
const slicedArray = commandLineArgs.slice(2);

console.log(slicedArray);

let total = 0;
for (const argument of slicedArray) {
  let number = Number(argument)

  // If any argument is not a whole number, skip it.
  // If any argument is a negative number, skip it.
  // => If argument is a whole number and is positive, add it to the total
  if (Number.isInteger(number) && number > 0) {
    total = total + Number(number);
  }
}

console.log(total);

