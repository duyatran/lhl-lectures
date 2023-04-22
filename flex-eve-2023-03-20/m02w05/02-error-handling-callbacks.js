// try-catch syntax
// try {
//     const abc = '123';
//     abc = 'abc';
//     console.log("The end of try block");
// } catch (error) {
//     console.log('Something went wrong!');
// }
// console.log("CONTINUE AS USUAL");

// What if we try-catch errors with an async operation?
// Guess what will be printed out before try running it.
const fs = require('fs');
try {
  const fileContent = fs.readFile("./helllo.txt", "utf-8", () => {});
  console.log(fileContent);
  console.log("should not be printed out");
} catch(error) {
  console.log("An error is caught: ", error);
}
