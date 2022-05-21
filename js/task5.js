/*
 * Створи функцію getLargestExpressionResult, яка приймає два числа a та b і повертає найбільший можливий результат серед виразів:
a + b
a — b
a * b
a / b
 */

function getLargestExpressionResult(a, b) {
  // return Math.max(a + b, a - b, a * b, a / b);

  const results = [a + b, a - b, a * b, a / b];
  let max = results[0];

  for (const result of results) {
    if (result > max) {
      max = result;
    }
  }

  return max;
}

console.log(getLargestExpressionResult(1, 2));
