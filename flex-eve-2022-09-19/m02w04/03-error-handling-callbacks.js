// A lot of Node callbacks use an "error-first" approach where the first argument to the callback function
// is an error or null, and the second argument is the correct return result (e.g. data)

// sayHello function
// - first try getUser
// - if getUser returns an error, console log the error
// - if getUser returns a user data ("bob"): async uppercase their name (complicated operation)

const getUser = (cb) => {
  console.log("Getting the user, 2 seconds please...");
  setTimeout(() => {
    cb(null, {name: "bob", age: 5});
  }, 2000)
}

const uppercaseAsync = (input, cb) => {
  console.log("async, 2 seconds please...");
  setTimeout(() => {
    cb(null, input.toUpperCase());
  }, 2000);
}


const sayHello = () => {
  getUser((err, user) => {
    console.log(user);
    if (err) {
      console.log("error getting user!");
      return;
    }
    uppercaseAsync(user.name, (err, uppercaseName) => {
      if (err) {
        console.log("error during capitalizing!");
        return;
      }
      console.log(`Hello ${uppercaseName}`);
    })
  });
}

sayHello()










