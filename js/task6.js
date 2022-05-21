/*
 * Потрібно написати функцію isAlphabet яка приймає рядок і перевіряє є чи рядок абетка
 */

function isAlphabet(string) {
  const normalizeString = string.toLowerCase().trim();
  if (normalizeString.length === 0) return false;

  let firstChar = normalizeString[0].charCodeAt(0);

  for (let i = 1; i < normalizeString.length; i += 1) {
    const nextChar = normalizeString[i].charCodeAt(0);

    if (nextChar - firstChar !== 1) {
      return false;
    }

    firstChar = nextChar;
  }

  return true;
}

console.log(isAlphabet('bcd')); // true
console.log(isAlphabet('abd')); // false
console.log(isAlphabet('       Abc')); // false
