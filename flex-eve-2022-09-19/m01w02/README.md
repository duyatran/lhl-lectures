# W01D04 - Callbacks!

### To Do
- [ ] Functions as values
- [ ] Function calling vs function passing
- [ ] Callbacks and higher order functions
- [ ] Anonymous functions
- [ ] Arrow functions
- [ ] Arrow functions should not be used as methods
- [ ] Array iteration functions


### Functions as Values
- Just like everything else in JavaScript, functions are values
- As a result, they can be stored in variables just like any other value

```js
//addTwo is a variable that holds a _reference_ to a function.
const addTwo = function(num) {
  return num + 2;
}
```

- They can also be passed around just like any other variables

```js
const addDeux = addTwo; //alias `addTwo` as `addDeux`.
console.log(addTwo);
console.log(addDeux);
addDeux(3); // equivalent to calling myFunction()
```

### Function calling vs function passing
- Note that the () is only used when invoking (or calling) a function
```js
const addDeux = addTwo; // assigning a function to variable "addDeux"
...
const result = addDeux(3); // invoke the function, and assign its return value to variable "result"
```

- And they can be passed to other functions as arguments

```js
const addTwo = function(num) {
    return num + 2;
}

const sumThenApplyCallback = function(nums, callback) {
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    console.log("sum", sum);
    return callback(sum);
}

const result = sumThenApplyCallback([1, 2, 3], addTwo);
console.log("result", result);

> sum 6
> result 8
```

### Callbacks and Higher Order Functions
- A callback is a function that gets passed to another function to be executed by that function
- Callback functions are used all over the place in JavaScript
- They encapsulate reusable code that can be passed around, and so they help keeping functions simple and for each function to have a "single responsibility"
- We call the function that accepts another function as an argument a **higher order function**

```js
const myFunction = function() {
  // do something
}

const myHigherOrderFunction = function(callback) {
  callback(); // equivalent to myFunction()
}

myHigherOrderFunction(myFunction);
```


### Anonymous Functions
- We can pass callback functions _inline_ to a higher order function rather than storing the callback in a variable first
- A "hand-waving" way to understand _inline_ is "in the same line, and not somewhere else." To define a function inline is to define it right where it is used

```js
const myHigherOrderFunction = function(callback) {
  callback();
}

// the function we pass as an argument has no name
myHigherOrderFunction(function() {});
```

- Anonymous functions are simply functions that do not have a name
- Why? [Naming things is hard](https://martinfowler.com/bliki/TwoHardThings.html)

### Arrow Functions
- Arrow functions are an alternative way to define functions

```js
// function keyword
const addTwo = function(num) {
    return num + 2;
}

// arrow function
const addTwo = (num) => {
    return num + 2;
}

// `()`s are optional for functions with exactly one parameter
const addTwo = num => {
    return num + 2;
}

// For one-line functions, the return statement becomes implicit
const addTwo = num => num + 2

// For functions with zero parameters, `()` is mandatory
const alwaysTrue = () => true;

// For functions with multiple parameters. `()` are also mandatory
const addTwoNumbers = (num1, num2) => num1 + num2;
```

- Arrow functions are often used as callbacks because they are shorter/cleaner to type

```js
arr.forEach(function(element) {});

// vs
arr.forEach((element) => {});
```

### Arrow functions should not be used as methods
```js
const car = {
    maxFuelLevel: 100,
    fuelLevel: 10,
    displayFuelLevel: function () {
        console.log(`Currently fueled at ${this.fuelLevel}L ${this.fuelLevel / this.maxFuelLevel * 100}% of max`);
    }
}
```

With regular `function` declaration syntax, the context of the function is the `car` object.

```js
const car = {
    maxFuelLevel: 100,
    fuelLevel: 10,
    displayFuelLevel: () => {
        console.log(`Currently fueled at ${this.fuelLevel}L ${this.fuelLevel / this.maxFuelLevel * 100}% of max`);
    }
}
```
With an arrow function, the context of the function is the `module` - _not_ the `car` object. We got a bit side-tracked in lecture about hoisting, definition/initialization, and `this` as related to objects, but you will learn more about `this` in week 3, so stay tuned.

### Array iteration functions
There are a few useful array iteration functions that we should know:
 - filter
 - map
 - reduce
 - forEach

Filter returns an array with only the values that pass a conditional check

```js
const evens = [1, 2, 3, 4].filter(num => num % 2 === 0);
console.log(evens); // > [2, 4]

const properNouns = ["Ian", "cat", "dog", "Taiwo"].filter(name => name[0].toUpperCase() === name[0]);
console.log(properNouns); // > ["Ian", "Taiwo"]
```

How could we implement our own version of `filter`?

```js
// accepts a callback that returns a boolean
const filter = function (array, callback) {
    const result = [];
    for (const item of array) {
        if (callback(item)) {
            result.push(item);
        } else {
            // DO NOTHING
        }
    }
    return result;
}
```


Map returns an array with a modification applied to each array item

```js
const doubled = [1, 2, 3, 4].map(num => num * 2);
console.log(doubled);

const capitalized = ["ian", "dog", "cat", "Taiwo"].map(name => name[0].toUpperCase() + name.slice(1));
```

ForEach is just like a `for ... of` loop, but the loop body is a callback:

```js
// To print each value
[1, 2, 3, 4].forEach(num => console.log(num));
```
 - ** note ** I discourage the use of `forEach`, because it has several disadvantages compared to a regular loop, and its semantics often lead to unexpected bugs! Here is a [good summary](https://www.designcise.com/web/tutorial/when-not-to-use-the-javascript-foreach-loop) of its problems, don't worry about the 4th case, just the first 3 are good-enough reasons to avoid `forEach`.

Reduce is a very fundamental loop iteration function, with which we can build all of the other functions.  It is _very powerful_, and _very generic_, and as a result it can be rather confusing. I recommend weighing the benefits of using it with readability.

 ```js
[1, 2, 3].reduce((accum, num) => num + accum, 0);

[1, 2, 3].reduce((accum, num) => num > 1 ? accum.concat(num) : accum, [])
 ```

### Useful Links
* [Wikipedia: Callbacks](https://en.wikipedia.org/wiki/Callback_(computer_programming))
* [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
