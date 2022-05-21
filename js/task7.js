/*
 * Як знайти суму елементів масиву, якщо вкладеність масиву невідома?
 */

function getTotalAmount(array) {
  let total = 0;

  for (const item of array) {
    if (Array.isArray(item)) {
      total += getTotalAmount(item);
    } else {
      total += item;
    }
  }

  return total;
}

console.log(getTotalAmount([20, [1, 2, [3, 4]], [9], [10, 12]]));
