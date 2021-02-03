//Обязательное задание
'use strict';
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
const start = function () {
  do {
    money = prompt('Ваш месячный доход?');
  } while (!isNumber(money));
};
start();

const income = 'Вёрстка';
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
const deposit = confirm('Есть ли у вас депозит в банке?');
const mission = 100000;
const period = 7;
let expenses = [];
let amount;

function showTypeOf() {
  console.log(typeof money, typeof income, typeof deposit);
}

function getExpensesMonth() {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов?');
    do {
      amount = prompt('Во сколько это обойдется?');
    } while (!isNumber(amount));
    sum += Number(amount);
  }
  return sum;
}
const expensesMonth = getExpensesMonth();

function getAccumulatedMonth(money, expensesMonth) {
  return money - expensesMonth;
}
const accumulatedMonth = getAccumulatedMonth(money, expensesMonth);

function getTargetMonth() {
  return Math.ceil(mission / accumulatedMonth);
}
const targetMonth = getTargetMonth();
const budgetDay = Math.floor(accumulatedMonth / 30);

showTypeOf();
console.log(expensesMonth);
console.log(addExpenses.split(', '));
if (targetMonth < 0) {
  console.log('Цель не будет достигнута');
} else {
  console.log('Цель будет достигнута за: ' + targetMonth + ' месяцев(-a)');
  console.log('Бюджет на день: ' + budgetDay);
}

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
