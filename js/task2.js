/*
 * Волонтери розділені на 5 груп з рівною кількістю людей у кожній.
 * Якщо в будь-якій групі менше 5 осіб, то для відновлення кількості необхідно набрати ще волонтерів.
 * Напишіть програму, яка бере фактичну кількість волонтерів як вступні дані і виводить у консоль кількість волонтерів, яку необхідно найняти, щоб у всіх 5 групах їх було порівну.
 */

const numberVolunteers = 5;

if (numberVolunteers % 5 === 0) {
  console.log(0);
} else {
  console.log(5 - (numberVolunteers % 5));
}
