// todo Масиви та рядки
/*
 * Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.
 */

const values = '8 11';
const numbers = values.split(' ');

const a = Number(numbers[0]);
const b = Number(numbers[1]);

const result = a * b;
console.log(result);

// let result = 1;
// for (const number of numbers) {
//   result *= Number(number);
// }

// console.log(result);
