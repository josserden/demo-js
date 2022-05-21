/*
 * Є масив із числами. Виведіть послідовно його елементи, використовуючи рекурсію і не використовуючи цикл.
 */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isLoop(numbers) {
  console.log(numbers[0]);
  numbers.splice(0, 1);

  if (numbers.length > 0) {
    isLoop(numbers);
  }
}

isLoop(array);
