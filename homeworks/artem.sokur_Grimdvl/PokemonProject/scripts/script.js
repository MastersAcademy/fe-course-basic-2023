const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const head = document.querySelector('.head');
const navigation = head.querySelector('.head__navigation');

const activateHamburgerMenu = () => {
    hamburger.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
        overlay.classList.toggle('active');
        head.parentElement.classList.toggle('active');
        navigation.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    overlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
        head.parentElement.classList.remove('active');
        navigation.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
};

activateHamburgerMenu();
