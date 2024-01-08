import { burgerButton, burgerAction } from './header.js';
import { gamesMock } from './mock_games.js';

burgerButton.addEventListener('click', burgerAction);
const preloader = document.querySelector('.preloader');
let games = [];
const gamesList = document.querySelector('[data-type="games_list"]');
const Err = document.createElement('div');
Err.innerText = 'Error fetching data from server!';
Err.classList.add('error');
const createCardElement = (game) => {
    const cardTemplate = document.querySelector('[data-type="card-template"]');
    const newCard = document.importNode(cardTemplate.content, true);
    newCard.querySelector('[data-id]').innerText = game.id;
    newCard.querySelector('[data-title]').innerText = game.title;
    newCard.querySelector('[data-thumbnail]').src = game.thumbnail;
    newCard.querySelector('[data-short_description]').innerText = game.short_description;
    newCard.querySelector('[data-genre]').innerText = game.genre;
    newCard.querySelector('[data-platform]').innerText = game.platform;
    newCard.querySelector('[data-publisher]').innerText = game.publisher;
    newCard.querySelector('[data-developer]').innerText = game.developer;
    newCard.querySelector('[data-release_date]').innerText = game.release_date;

    const dataTitle = newCard.querySelector('[data-title]').innerText;
    const shortDescription = newCard.querySelector('[data-short_description]').innerText;

    if (shortDescription.length > 40 && dataTitle.length > 15) {
        newCard.querySelector('[data-short_description]').innerText = `${shortDescription.slice(0, 40)}...`;
    } else if (shortDescription.length > 60 && dataTitle.length <= 15) {
        newCard.querySelector('[data-short_description]').innerText = `${shortDescription.slice(0, 60)}...`;
    }
    return newCard;
};
const renderCards = (container, cardsAmount) => {
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    cardsAmount.forEach((game) => {
        const cardItem = createCardElement(game);
        fragment.appendChild(cardItem);
    });
    container.appendChild(fragment);
    return container;
};

renderCards(gamesList, games);
const filterGames = () => {
    const oldRelease = document.querySelector('[data-type="old-release"]');
    const newRelease = document.querySelector('[data-type="new-release"]');
    const filterRelease = games.filter((game) => {
        const releaseDate = new Date(game.release_date).getFullYear();
        if (oldRelease.checked && newRelease.checked) {
            return releaseDate <= 2010 || releaseDate >= 2020;
        }
        if (oldRelease.checked) {
            return releaseDate <= 2010;
        }
        if (newRelease.checked) {
            return releaseDate >= 2020;
        }
        return true;
    });
    renderCards(gamesList, filterRelease.slice(0, 50));
};
async function loadGames() {
    try {
        preloader.style.display = 'block';
        const response = await fetch('https://mmo-games.p.rapidapi.com/games', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
            },
        });
        games = await response.json();
        preloader.style.display = 'none';
        renderCards(gamesList, games.slice(0, 50));
    } catch (err) {
        preloader.style.display = 'none';
        gamesList.innerHTML = '';
        gamesList.append(Err);
        renderCards(gamesList, gamesMock);
    }
    return games;
}

const init = () => {
    const oldCheck = document.querySelector('[data-type="old-release"]');
    const newCheck = document.querySelector('[data-type="new-release"]');
    const formFilter = document.querySelector('[data-type="form-filter"]');

    formFilter.addEventListener('click', filterGames);
    oldCheck.addEventListener('click', filterGames);
    newCheck.addEventListener('click', filterGames);
    loadGames();
};
init();

const buttonTop = document.querySelector('[data-arrow__up]');
const formFilter = document.querySelector('[data-type="form-filter"]');
const changeFilter = () => {
    if (formFilter.style.height === '100px') {
        formFilter.style.height = '100%';
    } else {
        formFilter.style.height = '100px';
    }
};
buttonTop.addEventListener('click', changeFilter);
