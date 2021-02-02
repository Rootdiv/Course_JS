//Обязательное задание
'use strict';
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

function showTypeOf() {
  console.log(typeof money, typeof income, typeof deposit);
}

function getExpensesMonth() {
  return amount1 + amount2;
}

function getAccumulatedMonth() {
  return money - (amount1 + amount2);
}
const accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
  return Math.ceil(mission / accumulatedMonth);
}

const budgetDay = Math.floor(accumulatedMonth / 30);

showTypeOf();
console.log(getExpensesMonth());
console.log(addExpenses.split(', '));
console.log('Цель будет достигнута за: ' + getTargetMonth() + ' месяцев(-a)');
console.log('Бюджет на день: ' + budgetDay);

function getStatusIncome() {
  if (budgetDay > 1200) {
    return 'У вас высокий уровень дохода';
  } else if (budgetDay <= 1200 && budgetDay >= 600) {
    return 'У вас средний уровень дохода';
  } else if (budgetDay < 600 && budgetDay >= 0) {
    return 'К сожалению у вас уровень дохода ниже среднего';
  } else {
    return 'Что то пошло не так';
  }
}
console.log(getStatusIncome());
