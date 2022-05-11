// todo Цикл for
/*
 * Напиши цикл for який виводить у консоль браузера числа за зростанням від min до max, але якщо число кратне 5.
 */

const max = 108;
const min = 28;

for (let i = min; i < max; i += 1) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
