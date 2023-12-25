const cardContainer = document.querySelector('[data-card-container]');
const footerElement = document.querySelector('[data-footer]');
const genreSelect = document.querySelector('[data-select-genre]');
const platformSelect = document.querySelector('[data-select-platform]');
const newGameCheck = document.querySelector('[data-new-games]');
const oldGameCheck = document.querySelector('[data-old-games]');
const searchButton = document.querySelector('[data-search-button]');
const searchInput = document.querySelector('[data-search-input]');
const newFirstButton = document.querySelector('[data-new-first]');
const oldFirstButton = document.querySelector('[data-old-first]');
const infoElement = document.querySelector('[data-info]');
const burgerButton = document.querySelector('[data-burger-button]');
const filterBlock = document.querySelector('[data-filter-block]');
async function getGamesArray() {
    infoElement.classList.replace('cards-loading-info--disabled', 'cards-loading-info');
    footerElement.classList.replace('footer--relative', 'footer--absolute');
    cardContainer.innerHTML = '';
    infoElement.innerText = 'Loading...';
    const option = {
        headers: {
            'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
        },
    };
    let url = 'https://mmo-games.p.rapidapi.com/games?';
    let games;
    switch (platformSelect.value) {
        case 'PC (Windows)':
            url += 'platform=pc';
            break;
        case 'Web Browser':
            url += 'platform=browser';
            break;
        default:
            url += 'platform=all';
            break;
    }
    if (oldFirstButton.checked || newFirstButton.checked) {
        url += '&sort-by=release-date';
    }
    const gamesPromice = await fetch(url, option);
    const allGames = await gamesPromice.json();
    if (oldFirstButton.checked) {
        games = await allGames.reverse();
    } else {
        games = await allGames;
    }
    for (let count = 0; count < 100000; count++) {
        console.log(count);
        console.clear();
    }
    return games;
}
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
    gamesArray.splice(50);
    container.innerHTML = '';
    const fragment = new DocumentFragment();
    for (let count = 0; count < gamesArray.length; count++) {
        fragment.append(createCardElement(count, gamesArray));
    }
    container.append(fragment);
    infoElement.classList.replace('cards-loading-info', 'cards-loading-info--disabled');
    if (gamesArray.length !== 0) {
        footerElement.classList.replace('footer--absolute', 'footer--relative');
    } else {
        footerElement.classList.add('footer--absolute');
        infoElement.classList.replace('cards-loading-info--disabled', 'cards-loading-info');
        infoElement.innerText = 'No Results';
    }
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
        const isPlatSelected = element.platform === platformSelect.value;
        const isPlatNonSelected = platformSelect.value === 'all';
        const releaseYear = getYear(element.release_date);
        if (isElTitleInc || isElDescInc) {
            if ((isGenreSelected || isGenreNonSelected) && (isPlatSelected || isPlatNonSelected)) {
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
        }
    });
    return filterArray;
}

async function showFilterArray() {
    renderCards(cardContainer, getFilterArray(await getGamesArray()));
}

async function init() {
    footerElement.classList.add('footer--absolute');
    renderCards(cardContainer, await getGamesArray());
    genreSelect.addEventListener('change', showFilterArray);
    platformSelect.addEventListener('change', showFilterArray);
    newGameCheck.addEventListener('change', showFilterArray);
    oldGameCheck.addEventListener('change', showFilterArray);
    newFirstButton.addEventListener('change', showFilterArray);
    oldFirstButton.addEventListener('change', showFilterArray);
    searchInput.addEventListener('keyup', () => {
        if (searchInput.value.trim() === '') showFilterArray();
    });
    searchButton.addEventListener('click', () => {
        if (searchInput.value.trim() !== '') showFilterArray();
    });
    burgerButton.addEventListener('click', () => {
        filterBlock.classList.toggle('filter__block--active');
        console.log(1);
    });
}
window.addEventListener('load', init);
