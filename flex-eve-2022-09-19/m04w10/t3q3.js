"use strict";

/* Question 03 (stretch)

This is a STRETCH QUESTION.

Let's revisit Question 01 which had us convert an array of arrays into an object.

This time, make it support nested arrays.

The nested arrays also only contain 2 element arrays to represent key & value:
[key, value]. However, this time we are allowing the value to be another array.

Non-array objects need NOT be supported/handled at all.

Examples:

- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]])

[['a', 1], ['b', 2], ['c', [['d', 4]]]]


- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]])
  => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }

*/

const deepArrayToObject = function(arr) {
  // loop thru array
  //   element = ['b', 2]
  //   object = {
  //     a: 1,
  //     b: 2
  //   }
  const object = {}

  // loop thru array and populate object
  // arr: [['a', 1], ['b', 2], ['c', [['d', 4]]]]
  for (const element of arr) {
    const key = element[0]
    const value = element[1]
    console.log(`In for loop: Key ${key}, Value ${value}`)
    // check if value is array
    const isArray = Array.isArray(value)

    // recursive case
    if (isArray) {
      // element: ['c', [['d', 4]]]] => { c:[['d', 4]] }
      console.log(`In isArray: Key ${key}, Value ${value}`);
      object[key] = deepArrayToObject(value);
    } else {
      // base case
      console.log(`normal key-value assignment ${key}-${value}`);
      // element: ['a', 1]
      object[key] = value // { a:1 }
    }
  }

  return object;
};

deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]])

// [['a', 1], ['b', 2], ['c', [['d', 4]]]]
// {
//   a: 1,
//   b: 2,
//   c: {
//     d: 4
//   }
// }


// Don't change below:
module.exports = { deepArrayToObject };
