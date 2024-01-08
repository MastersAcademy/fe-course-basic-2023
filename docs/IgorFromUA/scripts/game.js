function loadingSwitch(switching) {
    const LOADING_ELEMENT = document.querySelector('[data-loading]');
    LOADING_ELEMENT.style.visibility = switching ? 'visible' : 'hidden';
}

function getGameId() {
    const currentUrl = window.location.href;
    return currentUrl.split('?').at(-1);
}

function getGame(id) {
    const url = 'https://mmo-games.p.rapidapi.com/game?id=';
    const optionsGamesUrl = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
        },
    };
    return fetch(`${url}${id}`, optionsGamesUrl)
        .then((response) => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.status);
            } else {
                return response.json();
            }
        });
}

function createGameCardStr(game) {
    const {
        title,
        thumbnail,
        status,
        game_url: gameUrl,
        minimum_system_requirements: minSys = {},
        description,
        genre,
        platform,
        publisher,
        developer,
        release_date: releaseDate,
        screenshots,
    } = game;
    return `        <div class="card-header">
                    <button class="back-btn" data-back-btn>&lt BECK</button>
                    <h1 class="description__title" data-description-title>${title}</h1>
                    <span class="semiBold"><a class="card-header__link" href=${gameUrl} target="_blank">Game site</a></span>
                    </div>
                    <div class="card-section">
                        <div class="img-container">
                            <img class="card__img" data-card-img src="${thumbnail}" alt="game picture">
                            <ul class="card__actors">
                                <li class="card__actor" data-status>
                                    <span class="semiBold">Status:</span>    ${status}
                                </li>
                                <li class="card__actor" data-genre>
                                    <span class="semiBold">Genre:</span>    ${genre}
                                </li>
                                <li class="card__actor" data-platform>
                                    <span class="semiBold">Platform:</span>    ${platform}
                                </li>
                                <li class="card__actor" data-publisher>
                                    <span class="semiBold">Publisher:</span>    ${publisher}
                                </li>
                                <li class="card__actor" data-developer>
                                    <span class="semiBold">Developer:</span>    ${developer}
                                </li>
                                <li class="card__actor" data-release-date>
                                    <span class="semiBold">Release_date:</span>    ${releaseDate}
                                </li>
                            </ul>
                        </div>

                        <div class="card__description">
                            <p class="description__text" data-description-text>${description}</p>
                        </div>
                    </div>
                    <div class="screenshots">
                        ${screenshots.reduce((prev, val, indx) => `
                            ${prev}<div class="screenshot" id="${val.id}">
                                       <img src="${val.image}" alt="Screenshot ${indx + 1}">
                                   </div>
                       `, '')}

                    </div>
                    <div><span class="semiBold">minimum system requirements:</span>
                        <ul class="card__actors">
                            <li class="card__actor"><span class="semiBold">OS:</span>    ${minSys.os || '-'}</li>
                            <li class="card__actor"><span class="semiBold">memory:</span>    ${minSys.memory || '-'}</li>
                            <li class="card__actor"><span class="semiBold">storege:</span>    ${minSys.storege || '-'}</li>
                            <li class="card__actor"><span class="semiBold">processor:</span>    ${minSys.processor || '-'}</li>
                            <li class="card__actor"><span class="semiBold">graphics:</span>    ${minSys.graphics || '-'}</li>
                        </ul>
                    </div>
    `;
}

function createCardGame(game) {
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardContent.insertAdjacentHTML('afterbegin', createGameCardStr(game));
    return cardContent;
}

function goGamesPage() {
    const currentUrl = window.location.href;
    const endUrl = currentUrl.split('/');
    endUrl[endUrl.length - 1] = 'games.html';
    window.location.href = endUrl.join('/');
}

function initBackBtn() {
    const BACK_BTN = document.querySelector('[data-back-btn]');
    BACK_BTN.addEventListener('click', goGamesPage);
}

async function createCard(gameProm) {
    const GAME_ELEMENT = document.querySelector('[data-game]');
    loadingSwitch(true);
    const game = await gameProm;
    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(createCardGame(game));
    loadingSwitch(false);
    GAME_ELEMENT.insertAdjacentElement('afterbegin', card);
    initBackBtn();
}

function init() {
    createCard(getGame(getGameId()));
}

init();
