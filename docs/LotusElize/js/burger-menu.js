document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.getElementById('burger-icon');
    const navList = document.querySelector('.nav__list');

    burgerIcon.addEventListener('click', function () {
        navList.style.display = navList.style.display === 'none' || navList.style.display === '' ? 'flex' : 'none';
    });
});
