// todo Example 10 - Оператор % та методи рядків
/*
 * Напиши скрипт який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM.

* 70 покаже 01:10
* 450 покаже 07:30
*1440 покаже 24:00
 */

const totalMinutes = 450;
let hours = Math.floor(totalMinutes / 60);
let minutes = totalMinutes % 60;

// hours = hours < 10 ? `0${hours}` : hours;
// minutes = minutes < 10 ? `0${minutes}` : minutes;

// if (hours < 10) {
//   hours = `0${hours}`;
// }

// if (minutes < 10) {
//   minutes = `0${minutes}`;
// }

const parsedHours = String(hours).padStart(2, 0);
const parsedMinutes = String(minutes).padStart(2, 0);

const result = `${parsedHours}:${parsedMinutes}`;

console.log(result);
