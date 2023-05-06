const bcrypt = require('bcryptjs');

// 10 is the number of rounds
// if higher value, slower and more secure. Why?
const salt = bcrypt.genSaltSync(10);
console.log("sync salt:  ", salt);

const plaintextPassword1 = 'secret';
const plaintextPassword2 = 'secret';


const hash1 = bcrypt.hashSync(plaintextPassword1, salt);
const hash2 = bcrypt.hashSync(plaintextPassword2);

console.log("sync hash1: ", hash1);
console.log("sync hash2: ", hash2);


hashValueSavedInDb = '$2a$10$JdVNutcYjlQBrzNU3WJ2VOUGnduPHMXFk7tcZmaTn2vpjb4uoY9tq'
inputPasswordFromUser = 'secret';

const result = bcrypt.compareSync(
  inputPasswordFromUser,
  hashValueSavedInDb
);

// pseudo-code inside of bcrypt.compareSync()
// function compareSync(inputPasswordFromUser, hashValueSavedInDb) {
//   const extractedSalt = extract salt from hashValueSavedInDb
//   return bcrypt.hashSync(inputPasswordFromUser, extractedSalt) === hashValueSavedInDb;
// }

console.log("result: ", result);
