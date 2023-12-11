let allGamesData = [];
let gamesDisplayed = [];
const checkboxNew = document.querySelector('[data-filter="new"]');
const checkboxOld = document.querySelector('[data-filter="old"]');
let loadingOverlay;

// Wait for the DOM to be fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    loadingOverlay = document.querySelector('.loading');
});

function showLoadingOverlay() {
    if (loadingOverlay) {
        loadingOverlay.style.display = 'inline-block';
    }
}

function truncateText(text, maxLength) {
    const numModifiedCharacters = 50; // Задайте бажане значення тут
    const words = text.split(' ');
    let truncatedText = '';
    let currentLength = 0;

    for (const word of words) {
        if (currentLength + word.length <= maxLength) {
            truncatedText += word + ' ';
            currentLength += word.length + 1; // +1 за пробіл
        } else {
            break;
        }
    }

    if (truncatedText.length < text.length) {
        truncatedText = truncatedText.trim() + '...';
    }

    if (numModifiedCharacters && truncatedText.length > numModifiedCharacters) {
        truncatedText = truncatedText.substring(0, numModifiedCharacters) + '...';
    }

    return truncatedText;
}


async function createCardElement(game) {
    const cardCopy = document.importNode(document.querySelector('[data-type="card-template"]').content, true);

    cardCopy.querySelector('.card [data-card-img]').src = game.thumbnail;
    cardCopy.querySelector('.card [data-card-title]').textContent = game.title;

    const shortDescription = truncateText(game.short_description, 150); // Adjust the length as needed
    cardCopy.querySelector('.card [data-card-description]').textContent = shortDescription;

    cardCopy.querySelector('.card [data-card-genre]').textContent = game.genre;
    cardCopy.querySelector('.card [data-card-platform]').textContent = game.platform;
    cardCopy.querySelector('.card [data-card-publisher]').textContent = game.publisher;
    cardCopy.querySelector('.card [data-card-developer]').textContent = game.developer;
    cardCopy.querySelector('.card [data-card-release-date]').textContent = game.release_date;

    return cardCopy;
}


async function renderCards(container, games) {
    const containerElement = document.querySelector(`[data-container="${container}"]`);

    if (!containerElement) {
        console.error(`Container element "${container}" not found.`);
        return;
    }

    containerElement.innerHTML = ''; // Clearing innerHTML

    games.forEach(async (game) => {
        const card = await createCardElement(game);
        containerElement.appendChild(card);
    });
}

function hideLoadingOverlay() {
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
    }
}
async function fetchData() {
    try {
        showLoadingOverlay();

        const apiUrl = 'https://mmo-games.p.rapidapi.com/games';
        const response = await fetch(apiUrl, {
            method: 'GET',
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

        renderCards('game-cards', gamesDisplayed);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        hideLoadingOverlay();
    }
}

// Function to filter and update displayed cards
function updateCards() {
    const isNewChecked = checkboxNew.checked;
    const isOldChecked = checkboxOld.checked;

    const filteredGames = allGamesData.filter((game) => {
        const releaseYear = new Date(game.release_date).getFullYear();
        if (isNewChecked && isOldChecked) {
            return true;
        } if (isNewChecked) {
            return releaseYear > 2016;
        } if (isOldChecked) {
            return releaseYear <= 2015;
        }
        return true;
    });

    renderCards('game-cards', filteredGames);
}

// Event listeners for checkbox changes
checkboxNew.addEventListener('change', updateCards);
checkboxOld.addEventListener('change', updateCards);

// Initial data fetch and display
fetchData();


// Function to show the loading overlay
function showLoadingOverlay() {
    document.getElementById('loading-overlay').classList.add('active');
}

// Function to hide the loading overlay
function hideLoadingOverlay() {
    document.getElementById('loading-overlay').classList.remove('active');
}

// Call showLoadingOverlay() before making your API request
// Call hideLoadingOverlay() when your API request is complete
