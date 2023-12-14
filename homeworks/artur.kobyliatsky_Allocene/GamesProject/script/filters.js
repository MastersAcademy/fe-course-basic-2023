document.addEventListener('DOMContentLoaded', () => {
    const searchContainer = document.querySelector('.search');
    const genreSelect = document.querySelector('select[name="genre"]');
    const searchInput = document.querySelector('.inp__search');
    const mainElement = document.querySelector('main');

    function toggleSearchVisibility() {
        if (searchContainer.classList.contains('search-hidden')) {
            searchContainer.classList.remove('search-hidden');
        } else {
            searchContainer.classList.add('search-hidden');
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
