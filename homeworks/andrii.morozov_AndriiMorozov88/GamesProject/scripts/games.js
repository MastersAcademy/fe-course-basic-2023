import { games } from './games-mock.js';

console.log(games);

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
function getGenreSelectArray(array) {
    let genreSelectArray = [];
    switch (genreSelect.value) {
        case '1':
            genreSelectArray = array.filter((element) => element.genre === 'Shooter');
            break;
        case '2':
            genreSelectArray = array.filter((element) => element.genre === 'ARPG');
            break;
        case '3':
            genreSelectArray = array.filter((element) => element.genre === 'Battle Royale');
            break;
        case '4':
            genreSelectArray = array.filter((element) => element.genre === 'Strategy');
            break;
        case '5':
            genreSelectArray = array.filter((element) => element.genre === 'MMORPG');
            break;
        case '6':
            genreSelectArray = array.filter((element) => element.genre === 'Fighting');
            break;
        default:
            return array;
    }
    return genreSelectArray;
}
function getNewAndOldGamesArray(arr) {
    if (newGameCheck.checked && !oldGameCheck.checked) {
        return arr.filter((element) => getYear(element.release_date) > 2020);
    }
    if (oldGameCheck.checked && !newGameCheck.checked) {
        return arr.filter((element) => getYear(element.release_date) < 2010);
    }
    if (oldGameCheck.checked && newGameCheck.checked) {
        return arr.filter((e) => getYear(e.release_date) < 2010 || getYear(e.release_date) > 2020);
    }
    return arr;
}
function getSearchArray(array) {
    const searchArray = [];
    array.forEach((element) => {
        const searchInputValue = searchInput.value.toLowerCase();
        const isElTitleInc = element.title.toLowerCase().includes(searchInputValue);
        const isElDescInc = element.short_description.toLowerCase().includes(searchInputValue);
        if (isElTitleInc || isElDescInc) searchArray.push(element);
    });
    return searchArray;
}
function showFilterArray() {
    const firstLevelFilter = getSearchArray(games);
    const secondLevelFilter = getGenreSelectArray(firstLevelFilter);
    const thirdLevelFilter = getNewAndOldGamesArray(secondLevelFilter);
    renderCards(cardContainer, thirdLevelFilter);
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
