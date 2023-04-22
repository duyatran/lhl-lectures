// Callbacks used in synchronous flow
const sayGoodMorning = () => console.log("Good morning");
const sayGoodAfternoon = () => console.log("Good afternoon");

const repeatAction = (numberOfTimes, action) => {
  for (let i = 0; i < numberOfTimes; i++) {
    action();
  }
}
repeatAction(10, sayGoodMorning)

// Callbacks used in asynchronous flow
setTimeout(sayGoodMorning, 1000);
// console.log("Having brunch!")
setTimeout(sayGoodAfternoon, 2000);


// fs example
const fs = require("fs");

const handleFileRead = (err, data) => {
  console.log(data)
}

fs.readFile("./hello.txt", "utf-8", handleFileRead); // async
fs.readFileSync("./hello.txt", "utf-8"); // sync
// Why does readFile require a callback, but readFileSync does not?
