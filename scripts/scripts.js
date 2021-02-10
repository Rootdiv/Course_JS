//Обязательное задание
'use strict';
const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
//Проверяем содержит ли строка только цифры или она пустая
const isStr = function(str) {
  return isNumber(str) || str === '' || str === null;
};

const calculate = document.getElementById('start');
const add1 = document.getElementsByTagName('button')[0];
const add2 = document.getElementsByTagName('button')[1];
const deposit = document.querySelector('#deposit-check');
const additionalIncome1 = document.querySelectorAll('.additional_income-item')[0];
const additionalIncome2 = document.querySelectorAll('.additional_income-item')[1];
const budgetMonth = document.getElementsByClassName('budget_month-value')[0];
const budgetDay = document.getElementsByClassName('budget_day-value')[0];
const expensesMonth = document.getElementsByClassName('expenses_month-value')[0];
const additionalIncome = document.getElementsByClassName('additional_income-value')[0];
const additionalExpenses = document.getElementsByClassName('additional_expenses-value')[0];
const incomePeriod = document.getElementsByClassName('income_period-value')[0];
const targetMonth = document.getElementsByClassName('target_month-value')[0];
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-items .income-title');
const incomeAmount = document.querySelector('.income-amount');
const expensesTitle = document.querySelector('.expenses-items .expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');

let money;
const start = function() {
  do {
    money = prompt('Ваш месячный доход?');
  } while (!isNumber(money));
};
start();

const appData = {
  money: Number(money),
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 100000,
  period: 7,
  budgetDay: 0,
  budgetMonth: 0,
  targetMonth: 0,
  expensesMonth: 0,
  asking: function() {
    if (confirm('Есть ли у Вас дополнительный заработок?')) {
      let cashIncome, itemIncome;
      do {
        itemIncome = prompt('Какой у Вас дополнительный заработок');
      } while (isStr(itemIncome));
      do {
        cashIncome = prompt('Сколько Вы на этом зарабатываете');
      } while (!isNumber(cashIncome));
      appData.income[itemIncome] = Number(cashIncome);
    }
    const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у Вас депозит в банке?');
  },
  getExpensesMonth: function() {
    let amount, expense;
    for (let i = 0; i < 2; i++) {
      do {
        expense = prompt('Введите обязательную статью расходов?');
      } while (isStr(expense));
      do {
        amount = prompt('Во сколько это обойдется?');
      } while (!isNumber(amount));
      appData.expenses[expense] = Number(amount);
    }
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }
  },
  getBudget: function() {
    appData.budgetMonth = appData.money - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function() {
    appData.targetMonth = Math.ceil(appData.mission / appData.budgetMonth);
    if (appData.targetMonth < 0) {
      console.log('Цель не будет достигнута');
    } else {
      console.log('Цель будет достигнута за: ' + appData.targetMonth + ' месяцев(-a)');
    }
  },
  getStatusIncome: function() {
    if (appData.budgetDay > 1200) {
      return 'У Вас высокий уровень дохода';
    } else if (appData.budgetDay <= 1200 && appData.budgetDay >= 600) {
      return 'У Вас средний уровень дохода';
    } else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
      return 'К сожалению у Вас уровень дохода ниже среднего';
    } else {
      return 'Что то пошло не так';
    }
  },
  getInfoDeposit: function() {
    if (appData.deposit) {
      let moneyDeposit, percentDeposit;
      do {
        percentDeposit = prompt('Какой годовой процент');
      } while (!isNumber(percentDeposit));
      appData.percentDeposit = Number(percentDeposit);
      do {
        moneyDeposit = prompt('Какая сумма заложена');
      } while (!isNumber(moneyDeposit));
      appData.moneyDeposit = Number(moneyDeposit);
    }
  },
  calcSavedMoney: function() {
    return appData.budgetMonth * appData.period;
  }
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();

console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log(appData.getStatusIncome());

for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key + ': ' + appData[key]);
}

const str = [];
appData.addExpenses.forEach((item, i) => {
  str[i] = item.charAt(0).toUpperCase() + item.slice(1);
});
console.log(str.join(', '));
