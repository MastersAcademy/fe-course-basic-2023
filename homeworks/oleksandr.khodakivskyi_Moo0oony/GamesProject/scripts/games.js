import games from './games-mock.js';

const ul = document.querySelector('[data-type="cards-container"]');
const filterNew = document.querySelector('[data-filter-new]');
const filterOld = document.querySelector('[data-filter-old]');

function createCardElement(game) {
    const template = document.querySelector('template[data-type="card-template"]');
    const copiedTemplate = document.importNode(template.content, true);

    const gameImage = copiedTemplate.querySelector('[data-type="image"] img');
    gameImage.src = game.thumbnail;

    copiedTemplate.querySelector('[data-type="title"]').innerText = game.title;

    const shortDescription = game.short_description.substring(0, 57);
    copiedTemplate.querySelector('[data-type="short-description"]').innerText = `${shortDescription}...`;

    const details = copiedTemplate.querySelector('[data-type="details"]');
    details.innerHTML = `<li><b>Genre:</b> ${game.genre}</li>
                         <li><b>Platfrom:</b> ${game.platform}</li>
                         <li><b>Publisher:</b> ${game.publisher}</li>
                         <li><b>Developer:</b> ${game.developer}</li>
                         <li data-type="release_date"><b>Release date:</b> ${game.release_date}</li>`;

    return copiedTemplate;
}

function renderCards(container, gamesData) {
    const fragment = document.createDocumentFragment();

    gamesData.forEach((game) => {
        const cardElement = createCardElement(game);
        fragment.appendChild(cardElement);
    });
    container.appendChild(fragment);
}

function updateGames() {
    const gameDates = document.body.querySelectorAll('[data-type="release_date"]');
    const gameDatesArray = [...gameDates].map((dateElement) => {
        const releaseDateText = dateElement.innerText.replace('Release date:', '').trim();
        const releaseDate = new Date(releaseDateText);
        return releaseDate.getFullYear();
    });

    gameDatesArray.forEach((year, index) => {
        const gameCard = gameDates[index].closest('.game_card');

        if ((year >= 2020 && filterNew.checked) || (year <= 2010 && filterOld.checked)) {
            gameCard.style.display = 'grid';
        } else if (!filterNew.checked && !filterOld.checked) {
            gameCard.style.display = 'grid';
        } else {
            gameCard.style.display = 'none';
        }
    });
}

function init() {
    renderCards(ul, games);

    filterNew.addEventListener('click', updateGames);
    filterOld.addEventListener('click', updateGames);
}

init();
