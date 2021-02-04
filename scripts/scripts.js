//Обязательное задание
'use strict';
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function input() {
  const number = +prompt('Угадай число от 1 до 100');

  function set(num) {
    if (!isNumber(num) && num !== 0) {
      alert('Введите число!');
      input();
    } else if (num < 37 && num !== 0) {
      alert('Загаданное число больше');
      input();
    } else if (num > 37) {
      alert('Загаданное число меньше');
      input();
    } else if (num === 37) {
      alert('Поздравляю, Вы угадали!!!');
    } else {
      alert('Игра окончена');
    }
  }
  return set(number);
}
input();
