// todo Менше з чисел
/*
 * Напиши функцію min(a,b), яка повертає найменше з чисел a та b.
 */

const min = function (a, b) {
  // return a > b ? b : a;

  if (a > b) {
    return b;
  }

  return a;
};

console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1
