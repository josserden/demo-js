/*
 * Скрипт приймає 1 сторону сторони (side) і діагональ (diagonal) прямокутника.
 * Перевір це прямокутник (діагональ не може бути менше сторони прямокутника).
 * Поверни площу цього прямокутника або рядок not a rectangle, якщо це не прямокутник.
 * Округли значення до 2 знаків після коми.
 */

const side = 3;
const diagonal = 8;
let result;

if (side > diagonal) {
  result = 'not a rectangle';
} else {
  //   result = (Math.sqrt(diagonal ** 2 - side ** 2) * side).toFixed(2);

  result = (
    Math.sqrt(Math.pow(diagonal, 2) - Math.pow(side, 2)) * side
  ).toFixed(2);
}

console.log(result);
