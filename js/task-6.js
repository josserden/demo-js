// todo Example 6 - Методи рядків та чейнінг
/*
 * Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

* Вага та висота зберігаються в змінних weight і height, але не як числа, а у вигляді рядків (спеціально для завдання). Нецілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

* Індекс маси тіла необхідно округлити до однієї цифри після коми;

 */

let weight = '88,3';
let height = '1.75';

if (weight.includes(',')) {
  weight = weight.replace(',', '.');
}

if (height.includes(',')) {
  height = height.replace(',', '.');
}

// const bmi = parseFloat(weight) / Math.pow(parseFloat(height), 2);

const bmi = parseFloat(weight) / parseFloat(height ** 2);

console.log(bmi.toFixed(1));

// 28.8
