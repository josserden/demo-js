// todo Базові операції з масивом
/*
 * Створіть масив genres з елементами Jazz і Blues.✅
 * Додайте "Рок-н-рол" в кінець.✅
 * Виведіть у консоль перший елемент масиву.✅
 * Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.✅
 * Видаліть перший елемент і виведіть його в консоль.✅
 * Вставте «Country» та «Raggy» на початок масиву.✅
 */

const genres = ['Jazz', 'Blues'];
genres.push('Рок-н-рол');

console.log(genres[0]);
console.log(genres[genres.length - 1]);
console.log(genres.shift());
// console.log(genres.splice(0, 1).join());
genres.unshift('Country', 'Raggy');
// console.log(genres.splice(0, 0, 'Country', 'Raggy'));

console.table(genres);
