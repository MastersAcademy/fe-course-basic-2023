import games from './games-mock.js';

// card create from mock
function createCardElement(game) {
    const template = document.querySelector('template[data-type="card-template"]');

    const cardCopy = document.importNode(template.content, true);

    const imageElement = cardCopy.querySelector('[data-type="image"] img');
    imageElement.src = game.thumbnail;

    cardCopy.querySelector('[data-type="title"]').innerText = game.title;

    const descriptionElement = cardCopy.querySelector('[data-type="description"]');
    const maxDescriptionLength = 54;
    if (game.short_description.length > maxDescriptionLength) {
        descriptionElement.innerText = `${game.short_description.slice(0, maxDescriptionLength)}...`;
        descriptionElement.style.cursor = 'pointer';

        let DescriptionVisible = false;
        descriptionElement.addEventListener('click', () => {
            if (DescriptionVisible) {
                descriptionElement.innerText = `${game.short_description.slice(0, maxDescriptionLength)}...`;
            } else {
                descriptionElement.innerText = game.short_description;
            }

            DescriptionVisible = !DescriptionVisible;
        });
    } else {
        descriptionElement.innerText = game.short_description;
    }

    const descriptionList = cardCopy.querySelector('[data-type="short-description"]');
    descriptionList.innerHTML = `<li data-type = "genre"><b>Genre:</b> ${game.genre}</li>
                                 <li data-type = "platform"><b>Platform:</b> ${game.platform}</li>
                                 <li><b>Publisher:</b> ${game.publisher}</li>
                                 <li><b>Developer:</b> ${game.developer}</li>
                                 <li data-type="release_date"><b>Release date:</b> ${game.release_date}</li>`;

    return cardCopy;
}

// render cards
function renderCards(container, gamesList) {
    const fragment = document.createDocumentFragment();

    gamesList.forEach((game) => {
        const cardElement = createCardElement(game);
        fragment.appendChild(cardElement);
    });

    container.appendChild(fragment);
}

const ulContainer = document.querySelector('[data-type="cards-container"]');

renderCards(ulContainer, games);

// checkbox
function init() {
    const checkNew = document.querySelector('[data-type="check-new"]');
    const checkOld = document.querySelector('[data-type="check-old"]');
    const gameDates = document.body.querySelectorAll('[data-type="release_date"]');
    const gameDatesArray = Array.from(gameDates).map((dateElement) => {
        const releaseDateText = dateElement.innerText.replace('Release date:', '').trim();
        const releaseDate = new Date(releaseDateText);
        return releaseDate.getFullYear();
    });

    let checkedNew = false;
    let checkedOld = false;

    const updateCardsDisplay = () => {
        gameDatesArray.forEach((year, index) => {
            const gameCard = gameDates[index].closest('.game__cod2');

            if ((year >= 2020 && checkedNew) || (year <= 2010 && checkedOld)) {
                gameCard.style.display = 'block';
            } else if (!checkedNew && !checkedOld) {
                gameCard.style.display = 'block';
            } else {
                gameCard.style.display = 'none';
            }
        });
    };

    checkNew.addEventListener('click', () => {
        checkedNew = !checkedNew;
        updateCardsDisplay();
    });

    checkOld.addEventListener('click', () => {
        checkedOld = !checkedOld;
        updateCardsDisplay();
    });
}

init();

// drop down list
function selection() {
    const selectElement = document.getElementById('genre');
    let selectedGenreNow = selectElement.value;

    const gameCardElements = document.body.querySelectorAll('.game__cod2');

    const updateCardsDisplay = () => {
        gameCardElements.forEach((gameCard) => {
            const gameGenreElement = gameCard.querySelector('[data-type="genre"]');
            const gameGenre = gameGenreElement.textContent.replace('Genre:', ' ').trim().toLowerCase();

            if (selectedGenreNow === 'genre' || selectedGenreNow === 'allgames' || gameGenre === selectedGenreNow) {
                gameCard.style.display = 'block';
            } else {
                gameCard.style.display = 'none';
            }
        });
    };

    selectElement.addEventListener('change', () => {
        selectedGenreNow = selectElement.value;
        updateCardsDisplay();
    });

    updateCardsDisplay();
}

selection();

// search filed
const valueSearch = document.querySelector('[data-type="search"]');
const gameCardElements = document.body.querySelectorAll('.game__cod2');
const noResultsElement = document.querySelector('[data-type="text-h2"]');

valueSearch.addEventListener('input', () => {
    const searchTerm = valueSearch.value.toLowerCase();
    let hasResults = false;

    if (!searchTerm) {
        gameCardElements.forEach((cardElement) => {
            cardElement.style.display = 'block';
        });

        return;
    }

    gameCardElements.forEach((cardElement) => {
        const titleText = cardElement.querySelector('[data-type="title"]').innerText.toLowerCase();
        const descrText = cardElement.querySelector('[data-type="description"]').innerText.toLowerCase();

        if (titleText.includes(searchTerm) || descrText.includes(searchTerm)) {
            cardElement.style.display = 'block';
            hasResults = true;
        } else {
            cardElement.style.display = 'none';
        }
    });

    if (hasResults) {
        noResultsElement.style.display = 'none';
    } else {
        noResultsElement.style.display = 'block';
        noResultsElement.innerText = 'No results!';
    }
});
