const searchContainer = document.querySelector('[data-type="search"]');
const genreSelect = document.querySelector('select[name="genre"]');
const searchInput = document.querySelector('[data-type="inp-search"]');
const mainElement = document.querySelector('[data-type="main-games"]');
const plateText = document.querySelector('[data-type="plate"]');

document.addEventListener('DOMContentLoaded', () => {
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
