const gamesData = [
    {
        gameId: 1136,
        title: 'Last of Us',
        thumbnail: './images/card-1.jpeg',
        description: 'A post-apocalyptic tale of survival',
        gameUrl: 'https://www.example.com/last-of-us',
        genre: 'Action-adventure',
        platform: 'PlayStation',
        publisher: 'Sony Interactive',
        developer: 'Naughty Dog',
        releaseDate: '2013-06-14',
        profileUrl: 'https://www.example.com/last-of-us-profile',
    },
    {
        gameId: 2222,
        title: 'Uncharted',
        thumbnail: './images/card-2.jpeg',
        description: 'Adventure from Naughty Dog',
        gameUrl: 'https://www.example.com/uncharted',
        genre: 'Action-adventure',
        platform: 'PlayStation',
        publisher: 'Sony Interactive',
        developer: 'Naughty Dog',
        releaseDate: '2015-03-18',
        profileUrl: 'https://www.example.com/uncharted-profile',
    },
    {
        gameId: 3333,
        title: 'Wolfenstein',
        thumbnail: './images/card-4.jpeg',
        description: 'Fight against the Nazi regime',
        gameUrl: 'https://www.example.com/wolfenstein',
        genre: 'Action-adventure',
        platform: 'PlayStation',
        publisher: 'Bethesda Softworks',
        developer: 'MachineGames',
        releaseDate: '2014-05-20',
        profileUrl: 'https://www.example.com/wolfenstein-profile',
    },
    {
        gameId: 4444,
        title: 'Fallout 4',
        thumbnail: './images/card-5.jpeg',
        description: 'Explore the open-world RPG',
        gameUrl: 'https://www.example.com/fallout-4',
        genre: 'RPG',
        platform: 'PC, PlayStation',
        publisher: 'Bethesda Softworks',
        developer: 'Bethesda Studios',
        releaseDate: '2015-11-10',
        profileUrl: 'https://www.example.com/fallout-4-profile',
    },
    {
        gameId: 5555,
        title: 'Assassin\'s Odyssey',
        thumbnail: './images/card-6.jpeg',
        description: 'Journey in ancient Greece',
        gameUrl: 'https://www.example.com/ac-odyssey',
        genre: 'Action RPG',
        platform: 'PC, PlayStation, Xbox',
        publisher: 'Ubisoft',
        developer: 'Ubisoft Quebec',
        releaseDate: '2018-10-05',
        profileUrl: 'https://www.example.com/ac-odyssey-profile',
    },
    {
        gameId: 6666,
        title: 'The Witcher 3: Wild Hunt',
        thumbnail: './images/card-7.jpeg',
        description: 'Hunt monsters world ',
        gameUrl: 'https://www.example.com/witcher-3',
        genre: 'Action RPG',
        platform: 'PC, PlayStation, Xbox',
        publisher: 'CD Projekt',
        developer: 'CD Projekt Red',
        releaseDate: '2015-05-19',
        profileUrl: 'https://www.example.com/witcher-3-profile',
    },
    {
        gameId: 7777,
        title: 'Minecraft',
        thumbnail: './images/card-8.jpeg',
        description: 'Build blocky world',
        gameUrl: 'https://www.example.com/minecraft',
        genre: 'Sandbox',
        platform: 'PC, PlayStation',
        publisher: 'Mojang',
        developer: 'Mojang',
        releaseDate: '2011-11-18',
        profileUrl: 'https://www.example.com/minecraft-profile',
    },
    {
        gameId: 8888,
        title: 'Red Dead Redemption 2',
        thumbnail: './images/card-9.jpeg',
        description: 'Experience the life of an outlaw',
        gameUrl: 'https://www.example.com/rdr2',
        genre: 'Action-adventure',
        platform: 'PC, PlayStation, Xbox',
        publisher: 'Rockstar Games',
        developer: 'Rockstar Studios',
        releaseDate: '2018-10-26',
        profileUrl: 'https://www.example.com/rdr2-profile',
    },
    {
        gameId: 9999,
        title: 'Cyberpunk 2077',
        thumbnail: './images/card-10.jpeg',
        description: 'Enter the Night City',
        gameUrl: 'https://www.cyberpunk.net/ua/en/',
        genre: 'Action RPG',
        platform: 'PC, PlayStation, Xbox',
        publisher: 'CD Projekt',
        developer: 'CD Projekt Red',
        releaseDate: '2020-12-10',
        profileUrl: 'https://www.example.com/cyberpunk-2077-profile',
    },
    {
        gameId: 1010,
        title: 'Horizon Zero Dawn',
        thumbnail: './images/card-11.jpeg',
        description: 'Explore a world by Aloy',
        gameUrl: 'https://www.example.com/horizon-zero-dawn',
        genre: 'Action RPG',
        platform: 'PlayStation, PC',
        publisher: 'Sony Interactive',
        developer: 'Guerrilla Games',
        releaseDate: '2017-02-28',
        profileUrl: 'https://www.example.com/horizon-zero-dawn-profile',
    },
];

function createCardElement(game) {
    const template = document.querySelector('[data-type="card-template"]');
    const cardClone = document.importNode(template.content, true);

    cardClone.querySelector('[data-card-title]').textContent = game.title;
    cardClone.querySelector('[data-card-description]').textContent = game.description;
    cardClone.querySelector(
        '[data-card-genre]',
    ).textContent = `Genre: ${game.genre}`;
    cardClone.querySelector(
        '[data-card-platform]',
    ).textContent = `Platform: ${game.platform}`;
    cardClone.querySelector(
        '[data-card-publisher]',
    ).textContent = `Publisher: ${game.publisher}`;
    cardClone.querySelector(
        '[data-card-developer]',
    ).textContent = `Developer: ${game.developer}`;
    cardClone.querySelector(
        '[data-card-release-date]',
    ).textContent = `Release date: ${game.releaseDate}`;

    cardClone.querySelector('[data-card-img]').src = game.thumbnail;

    return cardClone;
}

function renderCards(cardsContainer, games) {
    const container = document.querySelector(
        `[data-container="${cardsContainer}"]`,
    );

    const fragment = document.createDocumentFragment();

    games.forEach((game) => {
        const cardElement = createCardElement(game);
        fragment.appendChild(cardElement);
    });

    container.appendChild(fragment);
}

renderCards('game-cards', gamesData);

// Додаємо обробник подій до чекбоксів
const newCheckbox = document.getElementById('newCheckbox');
const oldCheckbox = document.getElementById('oldCheckbox');

function updateCards() {
    // Отримуємо значення чекбоксів
    const isNewChecked = newCheckbox.checked;
    const isOldChecked = oldCheckbox.checked;

    // Фільтруємо дані за датою реліза
    const filteredGames = gamesData.filter((game) => {
        const releaseYear = new Date(game.releaseDate).getFullYear();
        if (isNewChecked && isOldChecked) {
            return true;
        } if (isNewChecked) {
            return releaseYear > 2016;
        } if (isOldChecked) {
            return releaseYear <= 2015;
        }
        return true;
    });

    const container = document.querySelector('[data-container="game-cards"]');
    container.innerHTML = '';

    renderCards('game-cards', filteredGames);
}

newCheckbox.addEventListener('change', updateCards);
oldCheckbox.addEventListener('change', updateCards);

updateCards();
