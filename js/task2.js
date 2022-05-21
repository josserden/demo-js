/*
 * Є масив із числами. Створіть із нього новий масив, де залишаться лежати лише позитивні числа. Створіть для цього допоміжну функцію isPositive(), яка параметром прийматиме число і повертатиме true, якщо число позитивне, і false - якщо негативне.
 */

const array = [1, 2, 3, -1, -2, -3];

function isPositive(number) {
  // return number > 0 ? true : false;

  // if (number > 0) {
  //   return true;
  // }

  // return false;

  return number > 0;
}

function getPositiveNumbers(numbers) {
  const newArr = [];

  for (const number of numbers) {
    if (isPositive(number)) {
      newArr.push(number);
    }
  }

  return newArr;
}

console.log(getPositiveNumbers(array));
