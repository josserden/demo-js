// todo Дедлайн здачі проекту (switch)
/*
 * Виконай рефакторинг коду задачі номер 7, використовуючи switch.
 */

const days = 0;
let message;

switch (days) {
  case 0:
    message = 'Cьогодні';
    break;

  case 1:
    message = 'Завтра';
    break;

  case 2:
    message = 'Післязавтра';
    break;

  default:
    message = 'Дата в майбутньому';
}

console.log(message);
