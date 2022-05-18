// todo Площа прямокутника
/*
 * Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.
 */

function getRectArea(dimension) {
  const array = dimension.split(' ');
  const a = Number(array[0]);
  const b = Number(array[1]);

  return a * b;
}

console.log(getRectArea('8 11'));
