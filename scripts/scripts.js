//Обязательное задание
'use strict';
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
//Проверяем содержит ли строка только цифры или она пустая
const isStr = function (str) {
  const strReg = /\D/;
  return !strReg.test(str) || str === '' || str === null;
};

let money;
const start = function () {
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
  asking: function () {
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
  getExpensesMonth: function () {
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
  getBudget: function () {
    appData.budgetMonth = appData.money - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    appData.targetMonth = Math.ceil(appData.mission / appData.budgetMonth);
    if (appData.targetMonth < 0) {
      console.log('Цель не будет достигнута');
    } else {
      console.log('Цель будет достигнута за: ' + appData.targetMonth + ' месяцев(-a)');
    }
  },
  getStatusIncome: function () {
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
  getInfoDeposit: function () {
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
  calcSavedMoney: function () {
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
