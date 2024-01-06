document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('[data-type="menu__list-a"]');

    menuItems.forEach((item) => {
        if (item.getAttribute('href') === window.location.pathname) {
            item.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('[data-type="header__burger"]');
    const menu = document.querySelector('[data-type="header__menu-section"]');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});
