// todo Колекція курсів (includes, indexOf, push тощо)

/*
 * Напишіть функції для роботи з колекцією навчальних курсів courses:

* addCourse(name) - додає курс до кінця колекції
* removeCourse(name) - видаляє курс із колекції
* updateCourse(oldName, newName) - змінює ім'я на нове
 */

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(course) {
  if (courses.includes(course)) {
    console.warn(`${course} курс вже є!`);
    return;
  }

  courses.push(course);
}

function removeCourse(course) {
  if (!courses.includes(course)) {
    console.warn(`Курс ${course} не знайдено!`);
    return;
  }

  courses.splice(courses.indexOf(course), 1);
}

function updateCourse(oldName, newName) {
  if (!courses.includes(oldName)) {
    console.warn(`Курс ${oldName} не знайдено!`);
    return;
  }

  courses.splice(courses.indexOf(oldName), 1, newName);
}

addCourse('Express');
// ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'У вас уже есть такой курс'

removeCourse('React');
// ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс с таким именем не найден'

updateCourse('Express', 'NestJS');
// console.table(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

console.log(courses);
