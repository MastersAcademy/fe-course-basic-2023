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
    if (window.scrollY > 500) {
        liftUp.style.right = '30';
    } else {
        liftUp.style.right = '-50';
    }
};
const arrowAppearance = () => {
    if (window.innerWidth < 602) {
        checkScroll();
    }
};

const handleButtonClick = () => {
    liftPoint.scrollIntoView({ block: 'center', behavior: 'smooth' });
};

liftUp.addEventListener('click', handleButtonClick);
window.addEventListener('resize', arrowAppearance);
window.addEventListener('scroll', arrowAppearance);
burgerButton.addEventListener('click', burgerAction);
