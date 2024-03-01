const burgerButton = document.querySelector('[data-burger]');
const dataMenuList = document.querySelector('[data-menu__list]');
const burgerAction = () => {
    if (dataMenuList.style.display === '' || dataMenuList.style.display === 'none') {
        dataMenuList.style.display = 'flex';
    } else
    if (dataMenuList.style.display === 'flex') {
        dataMenuList.style.display = '';
    }
};
burgerButton.addEventListener('click', burgerAction);
