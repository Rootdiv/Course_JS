'use strict';
const toggleMenu = () => {
  const btnMenu = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };
  btnMenu.addEventListener('click', handlerMenu);
  menu.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('close-btn')) {
      handlerMenu();
    } else {
      target = target.matches('[href^="#"]');
      if (target) {
        handlerMenu();
      }
    }
  });
};

export default toggleMenu;
