/*
 * Є масив logins з логінами користувачів. Напиши скрипт додавання логіну до масиву logins. Доданий логін повинен:

* проходити перевірку на довжину від 4 до 16 символів включно
* бути унікальним, тобто відсутнім у масиві logins

Розбий завдання на підзавдання за допомогою функцій.

* Напиши функцію isLoginValid(login), в якій перевір кількість символів параметра login і поверни true або false в залежності від того, чи довжина параметра потрапляє в заданий діапазон від 4-х до 16-ти символів включно.

* Напиши функцію isLoginUnique(allLogins, login), яка приймає список всіх логінів і логін, що додається, як параметри і перевіряє наявність login в масиві allLogins, повертаючи true якщо такого логіну ще немає і false якщо логін вже використовується.

* Напиши функцію addLogin(allLogins, login) яка:

* Приймає новий логін та масив усіх логінів як параметри
* Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid
* Якщо логін не валідний, припинити виконання функції addLogin і повернути рядок 'Помилка! Логін має бути від 4 до 16 символів'
* Якщо логін валідний, функція addLogin перевіряє унікальність логіну за допомогою функції isLoginUnique

* Якщо isLoginUnique поверне false, тоді addLogin не додає логін до масиву і повертає рядок 'Такий логін вже використовується!'
* Якщо isLoginUnique поверне true, addLogin додає новий логін в logins і повертає рядок 'Логін успішно доданий!'
* Принцип єдиної відповідальності функції - кожна функція робить щось одне. Це дозволяє перевикористовувати код і змінювати логіку роботи функції лише в одному місці, не торкаючись роботи програми в цілому.

* Предикатні функції повертають лише true або false. Такі функції прийнято називати з is: isLoginUnique і isLoginValid у нашому випадку.

* isLoginUnique тільки перевіряє, чи є такий логін в масиві і повертає true або false.
* isLoginValid тільки перевіряє чи валідний логін і повертає true або false.
* addLogin додає або не додає логін до масиву. При цьому для перевірок умови додавання використовує результати викликів інших функцій - isLoginUnique та isLoginValid.

 */

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }

  return false;
};

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    allLogins.push(login);
    console.log('Логін успішно доданий!');
  } else if (!isLoginUnique(allLogins, login)) {
    console.log('Такий логін вже використовується! ');
  } else {
    console.log('Помилка! Логін має бути від 4 до 16 символів');
  }
}

addLogin(logins, 'Ajax');
addLogin(logins, 'robotGoogles');
addLogin(logins, 'Zod');
addLogin(logins, 'jqueryisextremelyfast');
