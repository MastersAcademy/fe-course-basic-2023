const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const head = document.querySelector('.head');
const navigation = head.querySelector('.head__navigation');

const toggleHamburger = () => {
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    head.parentElement.classList.toggle('active');
    navigation.classList.toggle('active');
    document.body.classList.toggle('menu-open');
};

hamburger.addEventListener('click', toggleHamburger);
overlay.addEventListener('click', () => {
    if (document.body.classList.contains('menu-open')) {
        toggleHamburger();
    }
});
