window.onload = function () {
    const navLinks = document.querySelectorAll('.nav__link');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach((link) => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('nav__link-active');
        } else {
            link.classList.remove('nav__link-active');
        }
    });
};
