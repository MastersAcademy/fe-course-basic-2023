function showMenu() {
    const header = document.querySelector('.header');
    const burger = document.querySelector('.header__burger');

    burger.onclick = function () {
        header.classList.toggle('open');
    };
}

showMenu();
