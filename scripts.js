//Обязательное задание
const booksJS = document.querySelector('.books');
const books = document.querySelectorAll('.book');
booksJS.prepend(books[1]);
booksJS.append(books[2]);
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
books[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';
document.querySelector('.adv').remove();

const book2 = books[0].querySelectorAll('li');
book2[3].insertAdjacentElement('afterend', book2[6]);
book2[4].insertAdjacentElement('beforebegin', book2[8]);
book2[10].insertAdjacentElement('beforebegin', book2[2]);

const book5 = books[5].querySelectorAll('li');
book5[1].insertAdjacentElement('afterend', book5[9]);
book5[9].insertAdjacentElement('afterend', book5[3]);
book5[8].insertAdjacentElement('beforebegin', book5[5]);
book5[6].insertAdjacentElement('beforebegin', book5[2]);

const book6 = books[2].querySelectorAll('li');
book6[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');
