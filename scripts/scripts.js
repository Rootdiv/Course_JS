//Обязательное задание
const money = 5000;
const income = 'Вёрстка';
const addExpenses = 'Интернет, хостинг, домен, электроэнергия';
const deposit = true;
const mission = 100000;
const period = 7;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

const budgetDay = money / 30;
console.log(budgetDay);
