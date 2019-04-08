const uuid = require('uuid');

// function sum(...numbers) {
//   return numbers.reduce((acc, e) => acc + e, 0);
// }

function returnsPromise(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve('even');
    } else {
      reject('odd');
    }
  });
}

function sum(...numbers) {
  return { result: numbers.reduce((acc, el) => acc + el, 0) };
}

// function makeUser(name, age, isTest) {
function makeUser(name, age, isTest) {
  if (typeof name !== 'string') {
    throw new Error('string required for name arg');
  }
  if (typeof age !== 'number' || isNaN(age)) {
    throw new Error('number required for age arg');
  }

  // if (isTest) {
  //   return {
  //     id: 5,
  //     fullName: name,
  //     age
  //   };
  // }

  return {
    id: uuid(),
    fullName: name,
    age
  };
}

function callWithDelay(cb) {
  setTimeout(cb, 2000);
}

module.exports = {
  sum,
  makeUser,
  callWithDelay,
  returnsPromise
};
