import games from './games-mock.js';

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

function renderCards(container, cardsAmount) {
    const fragment = document.createDocumentFragment();

    cardsAmount.forEach((game) => {
        const cardElement = createCardElement(game);
        fragment.appendChild(cardElement);
    });
    container.appendChild(fragment);
}

const ul = document.querySelector('[data-type="cards-container"]');
renderCards(ul, games);

function init() {
    const filterNew = document.querySelector('[data-filter-new]');
    const filterOld = document.querySelector('[data-filter-old]');
    const gameDates = document.body.querySelectorAll('[data-type="release_date"]');
    const gameDatesArray = [...gameDates].map((dateElement) => {
        const releaseDateText = dateElement.innerText.replace('Release date:', '').trim();
        const releaseDate = new Date(releaseDateText);
        return releaseDate.getFullYear();
    });

    let newGameCheck = false;
    let oldGameCheck = false;

    const updateGames = () => {
        gameDatesArray.forEach((year, index) => {
            const gameCard = gameDates[index].closest('.game_card');

            if ((year >= 2020 && newGameCheck) || (year <= 2010 && oldGameCheck)) {
                gameCard.style.display = 'grid';
            } else if (!newGameCheck && !oldGameCheck) {
                gameCard.style.display = 'grid';
            } else {
                gameCard.style.display = 'none';
            }
        });
    };

    filterNew.addEventListener('click', () => {
        newGameCheck = !newGameCheck;
        updateGames();
    });

    filterOld.addEventListener('click', () => {
        oldGameCheck = !oldGameCheck;
        updateGames();
    });
}

init();
