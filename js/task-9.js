// todo Example 9 - Значення за замовчуванням та оператор нульового злиття
/*
 * Відрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не дорівнює undefined або null. Інакше має надаватися значення defaultValue. Перевірте роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (Nullish coalescing operator).
 */

const incomingValue = false;
const defaultValue = 10;

let value = incomingValue ?? defaultValue;

if (incomingValue === undefined) {
  value = defaultValue;
} else if (incomingValue === null) {
  value = defaultValue;
} else {
  value = incomingValue;
}

// if (incomingValue === undefined || incomingValue === null) {
//   value = defaultValue;
// } else {
//   value = incomingValue;
// }

console.log(value);
