document.addEventListener('DOMContentLoaded', () => {
    const searchContainer = document.querySelector('.search');
    const genreSelect = document.querySelector('select[name="genre"]');
    const searchInput = document.querySelector('.inp__search');
    const mainElement = document.querySelector('main');
    const plateText = document.getElementById('plate');

    function toggleSearchVisibility() {
        if (searchContainer.classList.contains('search-hidden')) {
            searchContainer.classList.remove('search-hidden');
            plateText.textContent = 'Close game filters';
        } else {
            searchContainer.classList.add('search-hidden');
            plateText.textContent = 'Open game filters';
        }
    }

    searchContainer.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleSearchVisibility();
    });

    genreSelect.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    searchInput.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    mainElement.addEventListener('click', () => {
        if (!searchContainer.classList.contains('search-hidden')) {
            toggleSearchVisibility();
        }
    });
});
