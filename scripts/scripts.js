//Обязательное задание
'use strict';
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let number = Math.floor(Math.random() * 100) + 1;

function startGame() {
  const numberInput = +prompt('Угадай число от 1 до 100');

  function game(num) {
    if (!isNumber(num) && num !== 0) {
      alert('Введите число!');
      startGame();
    } else if (num < number && num !== 0) {
      alert('Загаданное число больше');
      startGame();
    } else if (num > number) {
      alert('Загаданное число меньше');
      startGame();
    } else if (num === number) {
      alert('Поздравляю, Вы угадали!!!');
    } else {
      alert('Игра окончена');
    }
  }
  return game(numberInput);
}
console.log(number);
startGame();
