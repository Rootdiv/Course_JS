//Обязательное задание
const money = Number(prompt('Ваш месячный доход?'));
const income = 'Вёрстка';
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
const deposit = confirm('Есть ли у вас депозит в банке?');
const mission = 100000;
const period = 7;
const expenses1 = prompt('Введите обязательную статью расходов?');
const amount1 = +prompt('Во сколько это обойдется?');
const expenses2 = prompt('Введите обязательную статью расходов?');
const amount2 = +prompt('Во сколько это обойдется?');
const budgetMonth = money - amount1 + amount2;
const budgetDay = budgetMonth / 30;

console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(money);
console.log(addExpenses);
console.log(expenses1);
console.log(expenses2);
console.log('Цель будет достигнута за: ' + Math.ceil(mission / budgetMonth) + ' месяцев(-a)');
console.log('Бюджет на день: ', Math.floor(budgetDay));

if (budgetDay > 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay <= 1200 && budgetDay >= 600) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay >= 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
  console.log('Что то пошло не так');
}
