const burgerButton = document.querySelector('[data-burger]');
const dataMenuList = document.querySelector('[data-menu__list]');
const liftUp = document.querySelector('[data-lift_up]');
const liftPoint = document.querySelector('[data-lift_point]');

const burgerAction = () => {
    if (dataMenuList.style.display === '' || dataMenuList.style.display === 'none') {
        dataMenuList.classList.toggle('d__flex');
    }
};

const arrowAppearance = () => {
    if (window.innerWidth < 602) {
        liftUp.style.width = '50';
        liftUp.style.height = '50';
    } else {
        liftUp.style.width = '0';
        liftUp.style.height = '0';
    }
};

const handleButtonClick = () => {
    liftPoint.scrollIntoView({ block: 'center', behavior: 'smooth' });
};
liftUp.addEventListener('click', handleButtonClick);
arrowAppearance();
window.addEventListener('resize', arrowAppearance);
burgerButton.addEventListener('click', burgerAction);
