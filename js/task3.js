/*
 * Перепишіть конструкцію if за допомогою тернарного оператора
 */

// ✅ Де це доцільно
const a = 5;
const b = 10;
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Багато';
}

// ❌ Де це недоцільно

const login = 'Сотрудник';
let message;

if (login === 'Сотрудник') {
  message = 'Привет';
} else if (login === 'Директор') {
  message = 'Здравствуйте';
} else if (login === '') {
  message = 'Нет логина';
} else {
  message = '';
}
