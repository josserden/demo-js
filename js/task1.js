/*
 * Рубрика 'wtf!?' або "Що покаже консоль?"
 */

function a(value) {
  return true - value;
}

const b = a('4') + a('-4') + a('-4') + a(4);
// console.log(b);
