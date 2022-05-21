/*
 * Є двомірний масив з числами, наприклад [[1, 2, 3], [4, 5], [6]]. Знайдіть суму елементів цього масиву. Масив, звичайно, може бути довільним.
 */

const array = [[1, 2, 3], [4, 5], [6]];

function getTotal(numbers) {
  let total = 0;

  for (const arr of numbers) {
    for (const number of arr) {
      total += number;
    }
  }

  return total;
}

console.log(getTotal(array));
