//Обязательное задание
window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  //Таймер
  const countTimer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const twoDigits = (num) => {
      return ('0' + num).slice(-2);
    };

    const getTimeRemaining = () => {
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
    };

    const updateClock = () => {
      const timer = getTimeRemaining();
      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
    };
    if (getTimeRemaining().timeRemaining >= 0) {
      updateClock();
      setInterval(() => updateClock(), 1000);
    }

  };
  countTimer('24 February 2021');
  //Меню
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const btnClose = document.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li');
    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };
    btnMenu.addEventListener('click', handlerMenu);
    btnClose.addEventListener('click', handlerMenu);
    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
  };
  toggleMenu();
  //Модальное окно
  const toggleModal = () => {
    const popup = document.querySelector('.popup');
    const popUpBtn = document.querySelectorAll('.popup-btn');
    const popUpClose = document.querySelector('.popup-close');
    popup.style.display = 'block';
    popup.style.transform = 'translateX(100%)';
    let animation, count = 100;
    const transform = () => {
      animation = requestAnimationFrame(transform);
      count--;
      if (count >= 0) {
        popup.style.transform = `translateX(${count}%)`;
      } else {
        cancelAnimationFrame(animation);
      }
    };
    popUpBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        if (document.body.clientWidth > 768) {
          requestAnimationFrame(transform);
        } else {
          popup.style.transform = 'translateX(0)';
        }
      });
    });
    popUpClose.addEventListener('click', () => {
      count = 100;
      popup.style.transform = 'translateX(100%)';
    });
  };
  toggleModal();
});
