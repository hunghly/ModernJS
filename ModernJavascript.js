import {steamKey} from './keys.js';

// ES 6 updates
// String Interpolation/String Template Literal
let age = 26;
let finalString = `Hung is ${age} years old`;
let zenva = 'Zenva';
// Pad start and pad end
zenva = zenva.padEnd(10, '.');
zenva = zenva.padStart(15, '.');
// New arrow functions
let add = (x, y) => {
  return x + y;
}
console.log(add(1,2)); // returns 3
// New default parameters
let sub = (x , y = 1) => {
  return x - y;
}
console.log(sub(1));
// Promises
const promise = new Promise((resolve, reject) => {
  let number1 = 5;
  if (number1 === 5) {
    resolve('resolved');
  } else {
    reject('rejected');
  }
});
promise.then((response) => {
  console.log(response);
}).catch((response)=> {
  console.log(response);
});
// Asynchronous functions
async function multiply(x,y) {
  return x * y;
}




let appId = '221380'; // AoE II game ID
let inventory = {
  'food': 2,
  'clothing': 3
}

console.log(inventory.food);
console.log(inventory['food']);
