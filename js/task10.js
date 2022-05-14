/*
 * Який сьогодні день тижня?
 */

const dayNumber = new Date().getDay();
let day;

switch (dayNumber) {
  case 1:
    day = 'понеділок';
    break;

  case 2:
    day = 'вівторок';
    break;

  case 3:
    day = 'середа';
    break;

  case 4:
    day = 'четвер';
    break;

  case 5:
    day = 'пʼятниця';
    break;

  case 6:
    day = 'субота';
    break;

  case 7:
    day = 'неділя';
    break;

  default:
    day = 'невірно вказаний день';
}

console.log(`Сьогодні ${day}.`);
