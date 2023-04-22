// Let's rewrite 03-callback-hell.js to use promise-based fs
const fs = require('fs');
const fsPromises = fs.promises;

fsPromises.readFile('./hello.txt', 'utf-8')
  .then((helloData) => {
    const nameFilePath = helloData.split('\n')[1];
    return fsPromises.readFile(nameFilePath, 'utf-8');
  })
  .then((nameData) => {
    // handle data from second file
    console.log(nameData);
  })
  .catch((error) => {
    console.log('ERROR:', error);
  });
