// Created function createCardElement
function createCardElement(game, template) {
    const card = template.content.cloneNode(true);

    card.querySelector('[data-title]').textContent = game.title;
    card.querySelector('[data-img]').src = game.thumbnail;
    card.querySelector('[data-short-description]').textContent = game.short_description;
    card.querySelector('[data-genre]').textContent = game.genre;
    card.querySelector('[data-platform]').textContent = game.platform;
    card.querySelector('[data-publisher]').textContent = game.publisher;
    card.querySelector('[data-developer]').textContent = game.developer;
    card.querySelector('[data-release-date]').textContent = game.release_date;

    return card;
}

// Created function renderCards
function renderCards(container, gamesArray) {
    let template = document.querySelector('template[data-type="card-template"]');
    if (!template) {
        template = document.createElement('template');
        template.innerHTML = `
            <article class="card">
                <section class="card__header">
                    <img src="" alt="" class="card__img" style="width: 90px; height: 90px;" data-img>
                    <article class="card__about">
                        <h3 class="card__title" data-title></h3>
                        <p class="card__text" data-short-description></p>
                    </article>
                </section>
                <section class="card__info">
                    <article class="info">
                        <p class="info__title">Genre:</p>
                        <p class="info__value" data-genre></p>
                    </article>
                    <article class="info">
                        <p class="info__title">Platform:</p>
                        <p class="info__value" data-platform></p>
                    </article>
                    <article class="info">
                        <p class="info__title">Publisher:</p>
                        <p class="info__value" data-publisher></p>
                    </article>
                    <article class="info">
                        <p class="info__title">Developer:</p>
                        <p class="info__value" data-developer></p>
                    </article>
                    <article class="info">
                        <p class="info__title">Release date:</p>
                        <p class="info__value" data-release-date></p>
                    </article>
                </section>
            </article>
        `;
        document.body.appendChild(template);
    }

    container.innerHTML = ''; // container clean
    gamesArray.forEach((game) => {
        const card = createCardElement(game, template);
        container.appendChild(card);
    });
}

// 3. Function filterGames
function filterGames(gamesList, filters) {
    return gamesList.filter((game) => {
        const releaseYear = new Date(game.release_date).getFullYear();
        let match = false;
        filters.forEach((filter) => {
            if (filter === 'new' && releaseYear > 2020) {
                match = true;
            }
            if (filter === 'old' && releaseYear < 2010) {
                match = true;
            }
        });
        return match;
    });
}

// Init function
function init(games) {
    const container = document.querySelector('.games__grid');
    const checkboxList = document.querySelectorAll('input[name="filter"]');

    // Render all games at start
    renderCards(container, games);

    // Add event listeners to the filter checkboxes
    checkboxList.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            const filters = Array.from(document.querySelectorAll('input[name="filter"]:checked')).map((checkedCheckbox) => checkedCheckbox.dataset.filter);
            let filteredGames = games;
            if (filters.length > 0) {
                filteredGames = filterGames(games, filters);
            }
            renderCards(container, filteredGames);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://mmo-games.p.rapidapi.com/games';
    const headers = {
        'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
    };

    // Add loader
    const loaderContainer = document.querySelector('.loading');
    loaderContainer.innerHTML = `
    <div class="loader__circle"></div>
    <div class="loader__circle"></div>
    <div class="loader__circle"></div>
  `;

    // Disable loader after 2 seconds
    setTimeout(() => {
        loaderContainer.style.display = 'none';
    }, 2000);

    fetch(url, { headers })
        .then((response) => response.json())
        .then((data) => {
            // Create array of games
            const games = data.map((game) => ({
                title: game.title,
                thumbnail: game.thumbnail,
                short_description: game.short_description,
                genre: game.genre,
                platform: game.platform,
                publisher: game.publisher,
                developer: game.developer,
                release_date: game.release_date,
            })).slice(0, 50); // Display only 50 games

            // Call init function
            init(games);

            // Disable loader
            loaderContainer.style.display = 'none';
        })
        .catch((error) => {
            console.error('Error:', error);
            // Hide loader
            loaderContainer.style.display = 'none';
        });
});
