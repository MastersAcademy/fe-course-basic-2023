let allGamesData = [];
let gamesDisplayed = [];
const loadingOverlay = document.querySelector('.games__loading');
const checkNew = document.querySelector('[data-check-new]');
const checkOld = document.querySelector('[data-check-old]');

function showLoadingOverlay() {
    loadingOverlay.style.display = 'block';
}

function hideLoadingOverlay() {
    loadingOverlay.style.display = 'none';
}

 function createCardElement(game) {
    const template = document.querySelector('[data-card-template]');

    const cardCopy = document.importNode(template.content, true);

    const imageElement = cardCopy.querySelector('[data-card-img]');
    imageElement.src = game.thumbnail;

    cardCopy.querySelector('[data-card-title]').innerText = game.title;

    const descriptionElement = cardCopy.querySelector('[data-card-description]');
    const maxDescriptionLength = 60;
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

    const descriptionList = cardCopy.querySelector('[data-short-description]');
    descriptionList.innerHTML = `<li data-genre><b>Genre:</b> ${game.genre}</li>
                                 <li data-platform><b>Platform:</b> ${game.platform}</li>
                                 <li><b>Publisher:</b> ${game.publisher}</li>
                                 <li><b>Developer:</b> ${game.developer}</li>
                                 <li data-release-date><b>Release date:</b> ${game.release_date}</li>`;

    return cardCopy;
}

async function renderCards(container, games) {
    const fragment = document.createDocumentFragment();
    const containerElement = document.querySelector('[data-cards-container]');

    await Promise.all(games.map(async (game) => {
        const card = await createCardElement(game);
        fragment.appendChild(card);
    }));

    containerElement.innerHTML = '';
    containerElement.appendChild(fragment);
}

async function fetchData() {
    try {
        showLoadingOverlay();

        const apiUrl = 'https://mmo-games.p.rapidapi.com/games';
        const response = await fetch(apiUrl, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
            },
        });

        if (!response.ok) {
            throw new Error('Error! No data');
        }

        const data = await response.json();
        allGamesData = Array.isArray(data) ? data.slice(0, 50) : [];
        gamesDisplayed = [...allGamesData];

        renderCards('data-cards-container', gamesDisplayed);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        hideLoadingOverlay();
    }
}

function CheckboxChange() {
    const isNewChecked = checkNew.checked;
    const isOldChecked = checkOld.checked;

    if (isNewChecked || isOldChecked) {
        gamesDisplayed = allGamesData.filter((game) => {
            const releaseYear = new Date(game.release_date).getFullYear();

            if (isNewChecked && !isOldChecked) {
                return releaseYear > 2020;
            } if (isOldChecked && !isNewChecked) {
                return releaseYear < 2010;
            } if (isNewChecked && isOldChecked) {
                return releaseYear < 2010 || releaseYear > 2020;
            }
            return true;
        });
    } else {
        gamesDisplayed = [...allGamesData];
    }

    renderCards('data-cards-container', gamesDisplayed);
}

async function init() {
    checkNew.addEventListener('change', CheckboxChange);
    checkOld.addEventListener('change', CheckboxChange);
    renderCards('data-cards-container', gamesDisplayed);
    await fetchData();
}

document.addEventListener('DOMContentLoaded', init);
