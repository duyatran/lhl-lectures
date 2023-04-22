// A lot of Node callbacks use an "error-first" approach where the first argument to the callback function
// is an error or null, and the second argument is the correct return result (e.g. data)
fs.readFile("./hello.txt", "utf-8", (error, helloData) => {
  if (error) {
    console.log('ERROR:', error);
    return;
  }
  const nameFilePath = helloData.split('\n')[1];

  fs.readFile(nameFilePath, "utf-8", (error, nameData) => {
    if (error) {
      console.log('ERROR:', error);
      return;
    }
    console.log(nameData);
    // callback hell spawning...
  })
});
