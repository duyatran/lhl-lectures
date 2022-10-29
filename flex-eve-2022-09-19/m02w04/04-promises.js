const getUser = () => {
  console.log("Getting the user, 2 seconds please...");

  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => resolve({name: "bob", age: 5}), 2000);
    } else {
      reject(Error("SOME ERROR GETTING USER"));
    }
  })
}

const uppercaseAsync = (input) => {
  console.log("async, 2 seconds please...");

  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => resolve(input.toUpperCase()), 2000);
    } else {
      reject(Error("SOME ERROR CAPITALIZING"));
    }
  })
}


const sayHello = () => {
  getUser()
    .then(user => uppercaseAsync(user.name))
    .then(uppercaseName => console.log(`Hello ${uppercaseName}`))
    .catch(error => console.log(error));
}

sayHello();

