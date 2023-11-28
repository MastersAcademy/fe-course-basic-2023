import { games } from './games-mock.js';

const cardContainer = document.querySelector('[data-card-container]');
const genreSelect = document.querySelector('[data-select-genre]');
const newGameCheck = document.querySelector('[data-new-games]');
const oldGameCheck = document.querySelector('[data-old-games]');
const searchButton = document.querySelector('[data-search-button]');
const searchInput = document.querySelector('[data-search-input]');
function createCardElement(game, array) {
    const cardTemplate = document.querySelector('[data-card-template]');
    const cardID = cardTemplate.content.querySelector('[data-game-id]');
    const cardImage = cardTemplate.content.querySelector('[data-game-image]');
    const cardDescription = cardTemplate.content.querySelector('[data-game-description]');
    const cardTitle = cardTemplate.content.querySelector('[data-game-title]');
    const cardGameUrl = cardTemplate.content.querySelector('[data-game-url]');
    const cardPlatform = cardTemplate.content.querySelector('[data-game-platform]');
    const cardPublisher = cardTemplate.content.querySelector('[data-game-publisher]');
    const cardReleaseDate = cardTemplate.content.querySelector('[data-game-release]');
    const cardProfileUrl = cardTemplate.content.querySelector('[data-game-profile-url]');
    const cardGenre = cardTemplate.content.querySelector('[data-game-genre]');
    const cardDeveloper = cardTemplate.content.querySelector('[data-game-developer]');
    cardID.innerHTML = `<b>ID: </b>${array[game].id}`;
    cardImage.src = array[game].thumbnail;
    cardDescription.innerText = array[game].short_description;
    cardTitle.innerText = array[game].title;
    cardGameUrl.innerHTML = `<b>Game URL: </b>${array[game].game_url}`;
    cardPlatform.innerHTML = `<b>Platform: </b>${array[game].platform}`;
    cardPublisher.innerHTML = `<b>Publisher: </b>${array[game].publisher}`;
    cardReleaseDate.innerHTML = `<b>Release Date: </b>${array[game].release_date}`;
    cardProfileUrl.innerHTML = `<b>Profile URL: </b>${array[game].profile_url}`;
    cardGenre.innerHTML = `<b>Genre: </b>${array[game].genre}`;
    cardDeveloper.innerHTML = `<b>Developer: </b>${array[game].developer}`;
    const cardContent = cardTemplate.content.cloneNode(true);
    return cardContent;
}
function renderCards(container, gamesArray) {
    container.innerHTML = '';
    const fragment = new DocumentFragment();
    for (let count = 0; count < gamesArray.length; count++) {
        fragment.append(createCardElement(count, gamesArray));
    }
    container.append(fragment);
}
function getYear(string) {
    const dateArray = string.split('-');
    return Number(dateArray[0]);
}
function getFilterArray(array) {
    const filterArray = [];
    const searchInputValue = searchInput.value.toLowerCase();
    array.forEach((element) => {
        const isElTitleInc = element.title.toLowerCase().includes(searchInputValue);
        const isElDescInc = element.short_description.toLowerCase().includes(searchInputValue);
        const isGenreSelected = element.genre === genreSelect.value;
        const isGenreNonSelected = genreSelect.value === '0';
        const releaseYear = getYear(element.release_date);
        if ((isElTitleInc || isElDescInc) && (isGenreSelected || isGenreNonSelected)) {
            if (newGameCheck.checked && !oldGameCheck.checked) {
                if (releaseYear > 2020) filterArray.push(element);
            }
            if (oldGameCheck.checked && !newGameCheck.checked) {
                if (releaseYear < 2010) filterArray.push(element);
            }
            if (oldGameCheck.checked && newGameCheck.checked) {
                if (releaseYear > 2020 || releaseYear < 2010) filterArray.push(element);
            }
            if (!oldGameCheck.checked && !newGameCheck.checked) {
                filterArray.push(element);
            }
        }
    });
    return filterArray;
}
function showFilterArray() {
    renderCards(cardContainer, getFilterArray(games));
}
function init() {
    renderCards(cardContainer, games);
    genreSelect.addEventListener('change', showFilterArray);
    newGameCheck.addEventListener('change', showFilterArray);
    oldGameCheck.addEventListener('change', showFilterArray);
    searchInput.addEventListener('keyup', () => {
        if (searchInput.value.trim() === '') showFilterArray();
    });
    searchButton.addEventListener('click', () => {
        if (searchInput.value.trim() !== '') showFilterArray();
    });
}
window.addEventListener('load', init);
