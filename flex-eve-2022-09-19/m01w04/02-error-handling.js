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



// try-catch with async code
try {
  const contentOfSecret = fs.readFile("./secret.json", "utf-8", () => {});
} catch(error) {
  console.log("An error is caught:", error);
}
