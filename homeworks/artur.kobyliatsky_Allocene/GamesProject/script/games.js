// card create from API data
async function createCardElement(game) {
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

        let descriptionVisible = false;
        descriptionElement.addEventListener('click', () => {
            if (descriptionVisible) {
                descriptionElement.innerText = `${game.short_description.slice(0, maxDescriptionLength)}...`;
            } else {
                descriptionElement.innerText = game.short_description;
            }

            descriptionVisible = !descriptionVisible;
        });
    } else {
        descriptionElement.innerText = game.short_description;
    }

    const descriptionList = cardCopy.querySelector('[data-type="short-description"]');
    descriptionList.innerHTML = `<li data-type="genre"><b>Genre:</b> ${game.genre}</li>
                                <li data-type="platform"><b>Platform:</b> ${game.platform}</li>
                                <li><b>Publisher:</b> ${game.publisher}</li>
                                <li><b>Developer:</b> ${game.developer}</li>
                                <li data-type="release_date"><b>Release date:</b> ${game.release_date}</li>`;

    return cardCopy;
}

// fetch API
const apiUrl = 'https://mmo-games.p.rapidapi.com/games';
const ulContainer = document.querySelector('[data-type="cards-container"]');

async function renderCards(container) {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
        },
    };
    try {
        const response = await fetch(apiUrl, options);
        if (response.ok) {
            const gamesList = await response.json();

            const fragment = document.querySelector('[data-type="cards-container"]');
            const gamesJSON = Array.isArray(gamesList) ? gamesList : JSON.stringify(gamesList);

            const limitedGames = gamesJSON.slice(0, 50);
            limitedGames.forEach(async (game) => {
                const cardElement = await createCardElement(game);
                fragment.appendChild(cardElement);
            });

            container.appendChild(fragment);
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching games:', error);
    }
}

renderCards(ulContainer);
