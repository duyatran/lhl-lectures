// Problem:
// Write a JS program that takes in an unlimited number of command line arguments and prints out the sum of them.
// If any argument is not an integer, skip it.

// 1. INPUT(S) - (various) command line arguments
// 3. PROCESS: break things down step by step repeatedly
// 2. OUTPUTS - Sum of numbers

// Edge cases: non-integers (3.54), non-numbers

/**
 * Return sum of numbers, skip if number is not an integer
 * @param {Array<number>} numbers
 * @returns {total}
 */
function sum(numbers) {
  let total = 0;

  // sum all the numbers up into total
  for (const num of numbers) {

    // if num is not an integer skip it => add to total only if integer
    if (Number.isInteger(num)) {
      total += num;
    }
  }

  return total;
}

// sanity check input from command line
// console.log(process.argv); // ["node", "sum.js", "123", "243", ...]

// take element from index 2 onward
numbers = process.argv.slice(2)

// making sure numbers contain only numbers (and not other types)
numbers = numbers.map((n) => { return Number(n) });

// call sum(numbers)
console.log(sum(numbers))
