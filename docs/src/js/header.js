const burgerButton = document.querySelector('[data-burger]');
const dataMenuList = document.querySelector('[data-menu__list]');
const liftUp = document.querySelector('[data-lift_up]');
const liftPoint = document.querySelector('[data-lift_point]');

const burgerAction = () => {
    if (dataMenuList.style.display === '' || dataMenuList.style.display === 'none') {
        dataMenuList.classList.toggle('d__flex');
    }
};

const checkScroll = () => {
    if (window.scrollY) {
        liftUp.style.right = '7';
    } else {
        liftUp.style.right = '-50';
    }
};

const handleButtonClick = () => {
    liftPoint.scrollIntoView({ block: 'center', behavior: 'smooth' });
};

liftUp.addEventListener('click', handleButtonClick);
window.addEventListener('scroll', checkScroll);
burgerButton.addEventListener('click', burgerAction);
