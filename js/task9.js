/*
 * Паліндром - слово, речення чи послідовність символів, яка абсолютно однаково читається як у звичному напрямку, так і у зворотному. Наприклад, "Anna" - це паліндром, а "table" і "John" - ні.
 * Є рядок; потрібно написати функцію, яка дозволяє повернути значення true, якщо рядок є паліндром, і false - якщо ні. При цьому потрібно враховувати пробіли та розділові знаки.
 */

function palindrome(string) {
  const normalizeString = string.toLowerCase();
  const reversedString = normalizeString.split('').reverse().join('');

  return normalizeString === reversedString;
}

console.log(palindrome('Anna'));
console.log(palindrome('John'));
