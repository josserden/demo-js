// todo Example 5 - Шаблонні рядки

/*
 * Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.
 */

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenseBots = 50;
// const message =
//   companyName + ' has ' + (repairBots + defenseBots) + ' bots in stock';

const message = `${companyName} has ${
  repairBots + defenseBots
} 'bots' in stock`;

console.log(message);

// "Cyberdyne Systems has 200 bots in stock"
