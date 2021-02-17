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
const additionalIncomeItem = document.querySelectorAll('.additional_income-item'); //Возможный доход
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
let incomeItems = document.querySelectorAll('.income-items'); //Дополнительный доход
const expensesTitle = document.querySelector('.expenses-items .expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items'); //Обязательные расходы
const targetAmount = document.querySelector('.target-amount'); //Цель
const periodSelect = document.querySelector('.period-select');
const periodAmount = document.querySelector('.period-amount');
const data = document.querySelector('.data');
const cancel = document.getElementById('cancel');

class AppData {
  constructor() {
    this.money = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.targetMonth = 0;
    this.expensesMonth = 0;
  }
  start() {
    this.money = +salaryAmount.value;
    this.blockInput();
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.showResult();
  }
  showResult() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = this.getTargetMonth();
    incomePeriodValue.value = this.calcSavedMoney();
    periodSelect.addEventListener('input', () => {
      incomePeriodValue.value = this.calcSavedMoney();
    });
  }
  //Блок обязательных расходов
  addExpensesBlock() {
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
  }
  getExpenses() {
    expensesItems.forEach(item => {
      const itemExpenses = item.querySelector('.expenses-title').value;
      const cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        this.expenses[itemExpenses] = +cashExpenses;
      }
    });
  }
  getAddExpenses() {
    const addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(item => {
      item = item.trim();
      if (item !== '') {
        this.addExpenses.push(item);
      }
    });
  }
  //Блок дополнительных доходов
  addIncomeBlock() {
    const cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';
    }
  }
  getIncome() {
    incomeItems.forEach(item => {
      const itemIncome = item.querySelector('.income-title').value;
      const cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        this.income[itemIncome] = +cashIncome;
      }
    });
    for (let key in this.income) {
      this.incomeMonth += this.income[key];
    }
  }
  getAddIncome() {
    additionalIncomeItem.forEach(item => {
      const itemValue = item.value.trim();
      if (itemValue !== '') {
        this.addIncome.push(itemValue);
      }
    });
  }
  //Сумма расходов за месяц
  getExpensesMonth() {
    for (let key in this.expenses) {
      this.expensesMonth += this.expenses[key];
    }
  }
  getBudget() {
    this.budgetMonth = this.money + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  }
  getTargetMonth() {
    return Math.ceil(targetAmount.value / this.budgetMonth);
  }
  getStatusIncome() {
    if (this.budgetDay > 1200) {
      return 'У Вас высокий уровень дохода';
    } else if (this.budgetDay <= 1200 && this.budgetDay >= 600) {
      return 'У Вас средний уровень дохода';
    } else if (this.budgetDay < 600 && this.budgetDay >= 0) {
      return 'К сожалению у Вас уровень дохода ниже среднего';
    } else {
      return 'Что то пошло не так';
    }
  }
  getInfoDeposit() {
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
  }
  calcSavedMoney() {
    return this.budgetMonth * periodSelect.value;
  }
  inputToggle() {
    const inputArray = data.querySelectorAll('input[type=text]');
    for (let item of inputArray) {
      item.toggleAttribute('disabled');
    }
  }
  blockInput() {
    this.inputToggle();
    calculate.style.display = 'none';
    cancel.style.display = 'block';
  }
  reset() {
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
  eventsListeners() {
    document.querySelector('.calc').addEventListener('mouseover', () => {
      if (salaryAmount.value === '') {
        calculate.setAttribute('disabled', '');
      } else {
        calculate.removeAttribute('disabled');
      }
    });
    calculate.addEventListener('click', () => this.start());
    cancel.addEventListener('click', () => this.reset());
    expensesPlus.addEventListener('click', () => this.addExpensesBlock());
    incomePlus.addEventListener('click', () => this.addIncomeBlock());
    periodSelect.addEventListener('input', () => {
      periodAmount.textContent = periodSelect.value;
    });
  }
}
const appData = new AppData();

appData.eventsListeners();

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
