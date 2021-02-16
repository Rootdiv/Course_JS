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
const incomePlus = document.getElementsByTagName('button')[0];
const expensesPlus = document.getElementsByTagName('button')[1];
const deposit = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const additionalIncome1 = document.querySelectorAll('.additional_income-item')[0];
const additionalIncome2 = document.querySelectorAll('.additional_income-item')[1];
const budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
const additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
const targetMonthValue = document.getElementsByClassName('target_month-value')[0];
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-items .income-title');
let incomeItems = document.querySelectorAll('.income-items');
const expensesTitle = document.querySelector('.expenses-items .expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const periodAmount = document.querySelector('.period-amount');
const data = document.querySelector('.data');
const cancel = document.getElementById('cancel');

const appData = {
  money: 0,
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  budgetDay: 0,
  budgetMonth: 0,
  targetMonth: 0,
  expensesMonth: 0,
  start: function() {
    this.money = +salaryAmount.value;
    this.blockInput();
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.showResult();
  },
  showResult: function() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = this.getTargetMonth();
    incomePeriodValue.value = this.calcSavedMoney();
    periodSelect.addEventListener('input', function() {
      incomePeriodValue.value = this.calcSavedMoney();
    }.bind(appData));
  },
  //Блок обязательных расходов
  addExpensesBlock: function() {
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
  },
  getExpenses: function() {
    expensesItems.forEach(function(item) {
      const itemExpenses = item.querySelector('.expenses-title').value;
      const cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        this.expenses[itemExpenses] = +cashExpenses;
      }
    }.bind(appData));
  },
  getAddExpenses: function() {
    const addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item) {
      item = item.trim();
      if (item !== '') {
        this.addExpenses.push(item);
      }
    }.bind(appData));

  },
  //Блок дополнительных доходов
  addIncomeBlock: function() {
    const cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';
    }
  },
  getIncome: function() {
    incomeItems.forEach(function(item) {
      const itemIncome = item.querySelector('.income-title').value;
      const cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        this.income[itemIncome] = +cashIncome;
      }
    }.bind(appData));
    for (let key in this.income) {
      this.incomeMonth += this.income[key];
    }
  },
  getAddIncome: function() {
    additionalIncomeItem.forEach(function(item) {
      const itemValue = item.value.trim();
      if (itemValue !== '') {
        this.addIncome.push(itemValue);
      }
    }.bind(appData));
  },
  //Сумма расходов за месяц
  getExpensesMonth: function() {
    for (let key in this.expenses) {
      this.expensesMonth += this.expenses[key];
    }
  },
  getBudget: function() {
    this.budgetMonth = this.money + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  },
  getTargetMonth: function() {
    return Math.ceil(targetAmount.value / this.budgetMonth);
  },
  getStatusIncome: function() {
    if (this.budgetDay > 1200) {
      return 'У Вас высокий уровень дохода';
    } else if (this.budgetDay <= 1200 && this.budgetDay >= 600) {
      return 'У Вас средний уровень дохода';
    } else if (this.budgetDay < 600 && this.budgetDay >= 0) {
      return 'К сожалению у Вас уровень дохода ниже среднего';
    } else {
      return 'Что то пошло не так';
    }
  },
  getInfoDeposit: function() {
    if (this.deposit) {
      let moneyDeposit, percentDeposit;
      do {
        percentDeposit = prompt('Какой годовой процент');
      } while (!isNumber(percentDeposit));
      this.percentDeposit = Number(percentDeposit);
      do {
        moneyDeposit = prompt('Какая сумма заложена');
      } while (!isNumber(moneyDeposit));
      this.moneyDeposit = Number(moneyDeposit);
    }
  },
  calcSavedMoney: function() {
    return this.budgetMonth * periodSelect.value;
  },
  inputToggle: function() {
    const inputArray = data.querySelectorAll('input[type=text]');
    for (let item of inputArray) {
      item.toggleAttribute('disabled');
    }
  },
  blockInput: function() {
    this.inputToggle();
    calculate.style.display = 'none';
    cancel.style.display = 'block';
  },
  reset: function() {
    this.inputToggle();
    const inputReset = document.querySelectorAll('input[type=text]');
    for (let item of inputReset) {
      item.value = '';
    }
    for (let i = 1; i < expensesItems.length; i++) {
      expensesItems[i].remove();
      expensesPlus.style.display = 'block';
    }
    for (let i = 1; i < incomeItems.length; i++) {
      incomeItems[i].remove();
      incomePlus.style.display = 'block';
    }
    calculate.removeAttribute('style');
    cancel.removeAttribute('style');
    periodAmount.textContent = periodSelect.value = 1;
    this.money = +salaryAmount.value;
    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.incomeMonth = 0;
  }
};

document.querySelector('.calc').addEventListener('mouseover', function() {
  if (salaryAmount.value === '') {
    calculate.setAttribute('disabled', '');
  } else {
    calculate.removeAttribute('disabled');
  }
});
calculate.addEventListener('click', function() {
  this.start();
}.bind(appData));
cancel.addEventListener('click', function() {
  this.reset();
}.bind(appData));
expensesPlus.addEventListener('click', function() {
  this.addExpensesBlock();
}.bind(appData));
incomePlus.addEventListener('click', function() {
  this.addIncomeBlock();
}.bind(appData));
periodSelect.addEventListener('input', function() {
  periodAmount.textContent = periodSelect.value;
});

// console.log('Расходы за месяц: ' + appData.expensesMonth);
// console.log(appData.getStatusIncome());

// for (let key in appData) {
//   console.log('Наша программа включает в себя данные: ' + key + ': ' + appData[key]);
// }

// const str = [];
// appData.addExpenses.forEach((item, i) => {
//   str[i] = item.charAt(0).toUpperCase() + item.slice(1);
// });
// console.log(str.join(', '));
