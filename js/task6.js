// todo if...else та логічні оператори
/*
 * Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.

* Якщо значення змінної hours:
* менше 17, виводь рядок "Pending"
* більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
* більше 24 , виводи рядок "Overdue"
*/

const hours = 16;
let message;

if (hours < 17) {
  message = 'Pending';
} else if (hours >= 17 && hours <= 24) {
  message = 'Expires';
} else {
  message = 'Overdue';
}

console.log(message);
