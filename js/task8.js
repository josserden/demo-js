// todo Форматування часу
/*
 * Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.
 */

function formatTime(minutes) {
  let hours = Math.floor(minutes / 60);
  let mins = minutes % 60;

  hours = hours < 10 ? `0${hours}` : hours;
  mins = mins < 10 ? `0${mins}` : mins;

  return `${hours}:${mins}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1440)); // "24:01"
