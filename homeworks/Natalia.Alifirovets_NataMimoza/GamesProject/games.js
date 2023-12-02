const games = [
    {
        id: 1136,
        title: 'Overwatch 2',
        thumbnail: 'https://www.mmobomb.com/g/1136/thumbnail.jpg',
        short_description: 'Big changes come to the Overwatch formula in this sequel...and so does PvE content, eventually.',
        game_url: 'https://www.mmobomb.com/open/overwatch-2',
        genre: 'Shooter',
        platform: 'PC (Windows)',
        publisher: 'Activision Blizzard King',
        developer: 'Blizzard Entertainment',
        release_date: '2022-10-04',
        profile_url: 'https://www.mmobomb.com/overwatch-2',
    },
    {
        id: 523,
        title: 'Lost Ark',
        thumbnail: 'https://www.mmobomb.com/g/523/thumbnail.jpg',
        short_description: 'Journey throughout the realm of Arkesia and do battle against a demon invasion in...',
        game_url: 'https://www.mmobomb.com/open/lost-ark',
        genre: 'ARPG',
        platform: 'PC (Windows)',
        publisher: 'Amazon Games',
        developer: 'Smilegate',
        release_date: '2022-02-11',
        profile_url: 'https://www.mmobomb.com/lost-ark',
    },
    {
        id: 1113,
        title: 'PUBG: BATTLEGROUNDS',
        thumbnail: 'https://www.mmobomb.com/g/1113/thumbnail.jpg',
        short_description: 'Battle the odds in a 100v1 death match in PUBG: Battlegrounds, the classic free-to-play...',
        game_url: 'https://www.mmobomb.com/open/pubg',
        genre: 'Shooter',
        platform: 'PC (Windows)',
        publisher: 'KRAFTON, Inc.',
        developer: 'KRAFTON, Inc.',
        release_date: '2022-01-12',
        profile_url: 'https://www.mmobomb.com/pubg',
    },
    {
        id: 508,
        title: 'Enlisted',
        thumbnail: 'https://www.mmobomb.com/g/508/thumbnail.jpg',
        short_description: 'Step into the most famous battles of World War II in Enlisted, a free-to-play shooter from...',
        game_url: 'https://www.mmobomb.com/open/enlisted',
        genre: 'Shooter',
        platform: 'PC (Windows)',
        publisher: 'Gaijin Entertainment',
        developer: 'Darkflow Software',
        release_date: '2021-04-08',
        profile_url: 'https://www.mmobomb.com/enlisted',
    },
    {
        id: 1120,
        title: 'Fall Guys',
        thumbnail: 'https://www.mmobomb.com/g/1120/thumbnail.jpg',
        short_description: 'Fall Guys is a free-to-play massively multiplayer party royale game.',
        game_url: 'https://www.mmobomb.com/open/fall-guys',
        genre: 'Battle Royale',
        platform: 'PC (Windows)',
        publisher: 'Mediatonic',
        developer: 'Mediatonic',
        release_date: '2020-08-04',
        profile_url: 'https://www.mmobomb.com/fall-guys',
    },
    {
        id: 340,
        title: 'Game Of Thrones Winter Is Coming',
        thumbnail: 'https://www.mmobomb.com/g/340/thumbnail.jpg',
        short_description: 'Fame and glory await you in Westeros, in Game of Thrones: Winter Is Coming, the officially...',
        game_url: 'https://www.mmobomb.com/open/game-of-thrones-winter-is-coming',
        genre: 'Strategy',
        platform: 'Web Browser',
        publisher: 'GTArcade',
        developer: 'YOOZOO Games ',
        release_date: '2019-11-14',
        profile_url: 'https://www.mmobomb.com/game-of-thrones-winter-is-coming',
    },
    {
        id: 427,
        title: 'Drakensang Online',
        thumbnail: 'https://www.mmobomb.com/g/427/thumbnail.jpg',
        short_description: 'Drakensang Online is a free to play 3D action RPG game that features extraordinary 3D graphics...',
        game_url: 'https://www.mmobomb.com/open/drakensang-online',
        genre: 'MMORPG',
        platform: 'Web Browser',
        publisher: 'Bigpoint',
        developer: 'Bigpoint',
        release_date: '2011-08-08',
        profile_url: 'https://www.mmobomb.com/drakensang-online',
    },
    {
        id: 380,
        title: 'Dark Orbit Reloaded',
        thumbnail: 'https://www.mmobomb.com/g/380/thumbnail.jpg',
        short_description: 'Take part in huge intergalactic battles and take on the whole galaxy in DarkOrbit, the...',
        game_url: 'https://www.mmobomb.com/open/darkorbit',
        genre: 'Shooter',
        platform: 'Web Browser',
        publisher: 'Bigpoint',
        developer: 'Bigpoint',
        release_date: '2006-12-11',
        profile_url: 'https://www.mmobomb.com/darkorbit',
    },
    {
        id: 1122,
        title: 'MultiVersus',
        thumbnail: 'https://www.mmobomb.com/g/1122/thumbnail.jpg',
        short_description: 'Match up in 1v1, 2v2 co-op, or 4-person free-for-all modes in this free-to-play Smash-Style Brawler!',
        game_url: 'https://www.mmobomb.com/open/multiversus',
        genre: 'Fighting',
        platform: 'PC (Windows)',
        publisher: 'Warner Bros. Games',
        developer: 'Player First Games',
        release_date: '2022-07-19',
        profile_url: 'https://www.mmobomb.com/multiversus',
    },
    {
        id: 5,
        title: 'Crossout',
        thumbnail: 'https://www.mmobomb.com/g/5/thumbnail.jpg',
        short_description: 'Trick out your ride and take to the post-apocalyptic roads for battle in Crossout, the...',
        game_url: 'https://www.mmobomb.com/open/crossout',
        genre: 'Shooter',
        platform: 'PC (Windows)',
        publisher: 'Targem',
        developer: 'Gaijin',
        release_date: '2017-05-30',
        profile_url: 'https://www.mmobomb.com/crossout',
    },
];

const template = document.querySelector('[data-type="card-template"]');

function createCardElement(game) {
    const fragment = document.createDocumentFragment();

    const cardElement = template.content.cloneNode(true);

    const cardTitleElement = cardElement.querySelector('[data-card-title]');
    cardTitleElement.textContent = game.title;

    const cardInfoElement = cardElement.querySelector('[data-card-info]');
    cardInfoElement.textContent = game.short_description;

    const cardImageElement = cardElement.querySelector('[data-card-img]');
    cardImageElement.src = game.thumbnail;

    const cardGenreElement = cardElement.querySelector('[data-card-genre]');
    cardGenreElement.textContent = `Genre: ${game.genre}`;

    const cardPlatformElement = cardElement.querySelector('[data-card-platform]');
    cardPlatformElement.textContent = `Platform: ${game.platform}`;

    const cardPublisherElement = cardElement.querySelector('[data-card-publisher]');
    cardPublisherElement.textContent = `Publisher: ${game.publisher}`;

    const cardDeveloperElement = cardElement.querySelector('[data-card-developer]');
    cardDeveloperElement.textContent = `Developer: ${game.developer}`;

    const cardReleaseElement = cardElement.querySelector('[data-card-release]');
    cardReleaseElement.textContent = `Release date: ${game.release_date}`;

    fragment.appendChild(cardElement);

    return fragment;
}

function renderCards(container, gamesToRender) {
    gamesToRender.forEach((game) => {
        const cardElement = createCardElement(game);
        container.appendChild(cardElement);
    });
}

function filterAndRenderCards() {
    const checkboxNew = document.querySelector('[data-filter-box="new"]');
    const checkboxOld = document.querySelector('[data-filter-box="old"]');

    let filteredGames = [];

    if (checkboxNew.checked) {
        games.forEach((game) => {
            if (new Date(game.release_date).getFullYear() > 2020) {
                filteredGames.push(game);
            }
        });
    } else if (checkboxOld.checked) {
        games.forEach((game) => {
            if (new Date(game.release_date).getFullYear() < 2010) {
                filteredGames.push(game);
            }
        });
    } else {
        filteredGames = games;
    }

    const containerElement = document.querySelector('.container[data-type=\'cards\']');
    containerElement.innerHTML = '';

    renderCards(containerElement, filteredGames);
}
function handleCheckboxChange() {
    filterAndRenderCards();
}

const container = document.querySelector('.container[data-type=\'cards\']');
renderCards(container, games);

function init() {
    const checkboxNew = document.querySelector('[data-filter-box="new"]');
    const checkboxOld = document.querySelector('[data-filter-box="old"]');

    checkboxNew.addEventListener('change', handleCheckboxChange);
    checkboxOld.addEventListener('change', handleCheckboxChange);

    filterAndRenderCards();
}

init();
