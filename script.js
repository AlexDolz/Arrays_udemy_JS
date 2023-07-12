'use strict';

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// ************************ slice() ***********************************
// slice - dont mutate original array

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); // shallow copy like [...arr]

// *************************** splice() ********************************
// splice - mutate original array

// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr); // splice deleted elements in original array

// *************************** reverse() *******************************
// reverse - mutate original array

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'j'];
// console.log(arr2.reverse());
// console.log(arr2);

// ************************** concat() *********************************
// concat - dont mutate original array

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]); // same result

// ************************** join() ***********************************

// console.log(letters.join(' - '));

// ************************** at() ***********************************

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// getting the last element
// console.log(arr[arr.length - 1]); // 64
// console.log(arr.slice(-1)[0]); // 64
// console.log(arr.at(-1)); // 64

// works with strings too
// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

// ************************* forEach() *********************************

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('------FOREACH------');
// movements.forEach((movement, index, arr) => {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ....

// -------------------------------------------------------------------

// MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// // SET
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// ************************ map ****************************************

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// // the same with for of loop
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i) => {
//   return `Movement ${i + 1}: You ${
//     mov > 0 ? 'deposited' : 'withdrew'
//   } ${Math.abs(mov)}`;

//   // if (mov > 0) {
//   //   return `Movement ${i + 1}: You deposited ${mov}`;
//   // } else {
//   //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//   // }
// });
// console.log(movementsDescriptions);

// **************************** filter *********************************
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

// The same but with for of loop
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// ****************************** reduce *******************************

const balance = movements.reduce((acc, current) => acc + current, 0);
console.log(balance);

// the same with for of loop
let balanceFor = 0;
for (const mov of movements) balanceFor += mov;
console.log(balanceFor);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(max);

const max2 = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);

console.log(max2);

// ***************************** Chaining methods **********************

const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
