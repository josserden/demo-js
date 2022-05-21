/*
 * Потрібно написати функцію findVowels(string), яка приймає рядок як аргумент і повертає кількість голосних, які містяться в рядку.
 * Голосними є "a", "e", "i", "o", "u".
 */

function findVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (const char of string.toLowerCase()) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }

  return count;
}

console.log(findVowels('Kate'));
console.log(findVowels('aeiou'));
