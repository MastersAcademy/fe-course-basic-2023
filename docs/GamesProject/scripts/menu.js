const toggleMenuButton = document.getElementById('toggle_menu');

function toggleMenu() {
    document.body.classList.toggle('mobile-wrap_show');
    toggleMenuButton.classList.toggle('navbar__toggler_active');
}

toggleMenuButton.addEventListener('click', toggleMenu);
