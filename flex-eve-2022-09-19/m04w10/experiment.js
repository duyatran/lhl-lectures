// Stack overflow error from missing base case
// function countdown(x) {
//   // recursive case
//   console.log(countdown(x-1));
// }

// countdown(5);

// Math.pow()
// power(x, n) returns x^n
function power(x, n) {
  let result = 1;
  // multiply x by n times and save it in result
  counter = 0;
  for(i = 0; i < n; i++) {
    result = result * x;
    counter++;
  }
  return result;
}

// Think of sub-problems and derive the base case
// x * x * x * x
// ((x * x) * x ) * x
// x^4 = x * x^3
// x^3 = x * x^2
// x^2 = x * x^1
// x^1 = x
function power(x, n) {
  // base case
  if (n == 1) {
    return x;
  }
  // recursive case
  return x * power(x, n-1);
}
console.log(power(2, 4));

function power(x, n) {
  return n === 1 ? x : x * power(x, n-1);
}

// Visualization of execution
// power(2, 4) => 16
// => return 2 * power(2, 3); // 2 * 8 = 16
//           |-> power(2, 3)
//           => return 2 * power(2, 2); // 2 * 4 = 8
//                     |-> power(2, 2)
//                      => return 2 * power(2, 1); // 2 * 2 = 4
//                                |-> power(2, 1) = 2
//                                => return x; // base case