const waitAndDoSomething = (time, action) => {
  setTimeout(action, time);
};

const sayGoodMorning = () => console.log("Good morning");
const sayGoodAfternoon = () => console.log("Good afternoon");

waitAndDoSomething(1000, sayGoodMorning);
waitAndDoSomething(2000, sayGoodAfternoon);

// Are callbacks only used for asynchronous actions? NO, synchronous as well
const repeatAction = (amountOfTimes, action) => {
  for (let i = 0; i < amountOfTimes; i++) {
    action();
  }
}

repeatAction(10, sayGoodMorning)

// fs example
const fs = require("fs");

const handleFileRead = (err, data) => {
  console.log(data)
}

// Why does readFile require a callback, but readFileSync does not?
fs.readFile("./hello.txt", "utf-8", handleFileRead); // async
fs.readFileSync("./hello.txt", "utf-8"); // sync




