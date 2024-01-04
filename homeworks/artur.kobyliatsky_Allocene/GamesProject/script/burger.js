document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.header__menu-section a');

    menuItems.forEach((item) => {
        if (item.getAttribute('href') === window.location.pathname) {
            item.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu-section');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('lock');
    });
});
