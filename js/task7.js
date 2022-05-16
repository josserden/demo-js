// todo Пошук елемента
/*
 * Напиши скрипт пошуку найменшого числа в масиві. Код має працювати для будь-якого масиву чисел. Використовуйте цикл для вирішення задачі.
 */

const numbers = [2, 17, 94, 1, 23, 37, 0, -5]; // -5
let min = numbers[0];

for (const number of numbers) {
  if (min > number) {
    min = number;
  }
}

console.log(min);
