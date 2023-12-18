const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.nav');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    burger.classList.toggle('opened');
    menu.classList.toggle('active');
    body.classList.toggle('no-scroll');
});
