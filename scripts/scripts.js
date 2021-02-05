//Обязательное задание
'use strict';
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
const number = Math.floor(Math.random() * 100) + 1;

function startGame() {
  const numberInput = prompt('Угадай число от 1 до 100');

  function game(num) {
    if (num === null) {
      return alert('Игра окончена');
    } else if (!isNumber(num)) {
      alert('Введите число!');
      startGame();
    } else if (num <= 0 || num > 100) {
      alert('Введите число в диапазоне от 1 до 100 ');
      startGame();
    } else if (num < number) {
      alert('Загаданное число больше');
      startGame();
    } else if (num > number) {
      alert('Загаданное число меньше');
      startGame();
    } else if (Number(num) === number) {
      return alert('Поздравляю, Вы угадали!!!');
    }
  }
  return game(numberInput);
}
console.log(number);
startGame();
