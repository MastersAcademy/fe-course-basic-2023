const template = document.querySelector('[data-type="card-template"]');
let allGamesData = [];
let gamesDisplayed = [];
const checkboxNew = document.querySelector('[data-filter="new"]');
const checkboxOld = document.querySelector('[data-filter="old"]');
const loadingOverlay = document.querySelector('.loading-overlay');

function showLoadingOverlay() {
    loadingOverlay.style.display = 'block';
}

function hideLoadingOverlay() {
    loadingOverlay.style.display = 'none';
}

function createCardElement(game) {
    const cardCopy = document.createElement('li');
    cardCopy.classList.add('games__card');
    cardCopy.innerHTML = template.innerHTML;

    cardCopy.querySelector('[data-card-img]').src = game.thumbnail;
    cardCopy.querySelector('[data-card-title]').textContent = game.title;
    cardCopy.querySelector('[data-card-release]').innerHTML = `<span class='bold'>Release_date:</span> ${game.release_date}`;

    return cardCopy;
}

function renderCards(container, games) {
    const fragment = document.createDocumentFragment();
    const containerElement = document.querySelector(`[data-type="${container}"]`);

    games.forEach((game) => {
        const card = createCardElement(game);
        fragment.appendChild(card);
    });

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
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        allGamesData = Array.isArray(data) ? data.slice(0, 50) : [];
        gamesDisplayed = [...allGamesData];

        renderCards('card-container', gamesDisplayed);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        hideLoadingOverlay();
    }
}

function handleCheckboxChange() {
    const isNewChecked = checkboxNew.checked;
    const isOldChecked = checkboxOld.checked;

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

    renderCards('card-container', gamesDisplayed);
}

async function init() {
    checkboxNew.addEventListener('change', handleCheckboxChange);
    checkboxOld.addEventListener('change', handleCheckboxChange);

    await fetchData();
}

document.addEventListener('DOMContentLoaded', init);
