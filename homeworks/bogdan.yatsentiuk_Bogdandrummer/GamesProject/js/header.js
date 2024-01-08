export const burgerButton = document.querySelector('[data-burger]');
export const dataMenuList = document.querySelector('[data-menu__list]');
export const burgerAction = () => {
    if (dataMenuList.style.display === '' || dataMenuList.style.display === 'none') {
        dataMenuList.style.display = 'flex';
    } else
    if (dataMenuList.style.display === 'flex') {
        dataMenuList.style.display = '';
    }
};
export const hideMenu = () => {
    dataMenuList.style.display = '';
};
dataMenuList.addEventListener('mouseleave', hideMenu);
burgerButton.addEventListener('click', burgerAction);
