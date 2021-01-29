//Обязательное задание
const money = 5000;
const income = 'Вёрстка';
const addExpenses = 'Интернет, хостинг, домен, электроэнергия';
const deposit = true;
const mission = 100000;
const period = 7;
const budgetDay = money / 30;

console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(budgetDay);

//Усложнённое задание
const num = 266219;
const numArr = num.toString().split('');
let result = 1;
for (let i = 0; i < numArr.length; i++) {
  result *= parseInt(numArr[i]);
}
const degree = result ** 3;
console.log(degree.toString().slice(0, 2));
