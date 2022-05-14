/*
 * Дано рядок, що складається із символів, наприклад, 'abcde'.
 * Перевірте, що першим символом цього рядка є буква 'a'. Якщо це так - виведіть 'так', інакше виведіть 'ні'.
 */

const string = '   abcde';
const normalizedString = string.trim();
const result = normalizedString.startsWith('a') ? 'так' : 'ні';

console.log(result);

// if (normalizedString[0] === 'a') {
//   console.log('Yes');
// } else {
//   console.log('No');
// }
