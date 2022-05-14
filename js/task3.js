/*
 * Перепишіть конструкцію if за допомогою тернарного оператора
 */

// ✅ Де це доцільно
const a = 5;
const b = 10;
let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Багато';
// }

result = a + b < 4 ? 'Мало' : 'Багато';

// ❌ Де це недоцільно

const login = 'Директор';
let message;

// if (login === 'Сотрудник') {
//   message = 'Привет';
// } else if (login === 'Директор') {
//   message = 'Здравствуйте';
// } else if (login === '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

switch (login) {
  case 'Сотрудник':
    message = 'Привет';
    break;

  case 'Директор':
    message = 'Здравствуйте';
    break;

  case '':
    message = 'Нет логина';
    break;

  default:
    message = '';
    break;
}

// message =
//   login === 'Сотрудник'
//     ? 'Привет'
//     : login === 'Директор'
//     ? 'Здравствуйте'
//     : login === ''
//     ? 'Нет логина'
//     : '';

console.log(message);
