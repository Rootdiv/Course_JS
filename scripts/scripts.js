//Обязательное задание
let money = 5000;
const income = 'Вёрстка';
let addExpenses = 'Интернет, хостинг, домен, электроэнергия';
let deposit = true;
const mission = 100000;
const period = 7;
let budgetDay = money / 30;

console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(budgetDay);

money = prompt('Ваш месячный доход?');
console.log(money);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', addExpenses);
console.log(addExpenses);
deposit = confirm('Есть ли у вас депозит в банке?');
const expenses1 = prompt('Введите обязательную статью расходов?');
const amount1 = prompt('Во сколько это обойдется?');
const expenses2 = prompt('Введите обязательную статью расходов?');
const amount2 = prompt('Во сколько это обойдется?');
console.log(expenses1);
console.log(expenses2);
const budgetMonth = Number(money) - Number(amount1) + Number(amount1);
console.log('Цель будет достигнута за: ' + Math.ceil(mission / budgetMonth) + ' месяцев(-a)');
budgetDay = budgetMonth / 30;
console.log('Бюджет на день: ', Math.floor(budgetDay));
//budgetDay = +prompt('Ваш месячный доход?');
if (budgetDay > 1200) console.log('У вас высокий уровень дохода');
else if (budgetDay < 1200 && budgetDay > 600) console.log('У вас средний уровень дохода');
else if (budgetDay < 600 && budgetDay > 0) console.log('К сожалению у вас уровень дохода ниже среднего');
else if (budgetDay === 1200) console.log('У вас почти высокий уровень дохода');
else if (budgetDay === 600) console.log('У вас почти средний уровень дохода');
else if (budgetDay === 0) console.log('К сожалению у вас нет дохода');
else console.log('Что то пошло не так');
