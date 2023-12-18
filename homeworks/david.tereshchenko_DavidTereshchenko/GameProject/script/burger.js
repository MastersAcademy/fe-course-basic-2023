document.querySelector('.header__burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('open');
});
document.querySelector('.filter__icon').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.filter__checkbox').classList.toggle('open');
});
