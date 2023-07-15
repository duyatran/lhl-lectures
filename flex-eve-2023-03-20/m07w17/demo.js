// JS Data types
//
// Primitives
// Immutable / Passed by value (to and from functions)
// - Number
// - Boolean
// - Strings
// - BigInt
// - undefined
// - null
// - symbol

const myStr1 = "Hello world!";
const myStr2 = myStr1; // myStr2 == "Hello world!"

myStr2 = "Hi"
myStr1 = "Hello world!"

console.log(myStr1);
console.log(myStr2);


// Non-primitive (more complex)
// Mutable / Passed by reference (to and from functions)
// - Arrays
// - Objects
const myArr1 = ["Hello world!", 42, [1,2,3]];
const myArr2 = myArr1;

myArr2.push("Hi"); // no error
myArr2 = [1,2,3]

console.log(myArr1);
console.log(myArr2);

const myArr3 = [...myArr1] // Spread does NOT make a DEEP COPY, it makes only a SHALLOW COPY => myArr3 === ["Hello world!", 42, REF]

const obj1 = {
  name: "LHL",
  languages: ["HTML", "CSS", "JS"]
}

const obj2 = ob1;

obj2 = {...obj1} // SHALLOW COPY
obj2.languages = [...obj1.languages] // DEEP COPY

const obj2 = JSON.parse(JSON.stringify(obj1)) // now, just use structuredClone()
