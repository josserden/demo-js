// todo Відображення часу (if...else)
/*
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 год. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 год.", без хвилин.
 */

const hours = 14;
const minutes = 0;
let message;

// if (minutes === 0) {
//   message = `${hours} год.`;
// } else {
//   message = `${hours} год. ${minutes} хв.`;
// }

message = minutes === 0 ? `${hours} год.` : `${hours} год. ${minutes} хв.`;

console.log(message);
