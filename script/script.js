//Обязательное задание
window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  //Таймер
  function countTimer(deadline) {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    function twoDigits(num) {
      return ('0' + num).slice(-2);
    }

    function getTimeRemaining() {
      const dateStop = new Date(deadline).getTime();
      const dateNow = new Date().getTime();
      const timeRemaining = (dateStop - dateNow) / 1000;
      const seconds = twoDigits(Math.floor(timeRemaining % 60));
      const minutes = twoDigits(Math.floor((timeRemaining / 60) % 60));
      const hours = twoDigits(Math.floor(timeRemaining / 60 / 60));
      return {
        timeRemaining,
        hours,
        minutes,
        seconds
      };
    }

    function updateClock() {
      const timer = getTimeRemaining();
      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
    }
    if (getTimeRemaining().timeRemaining >= 0) {
      updateClock();
      setInterval(() => updateClock(), 1000);
    }

  }
  countTimer('24 February 2021');
});
