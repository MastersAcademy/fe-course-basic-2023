// games-mock.js
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
        short_description: 'Journey throughout the realm of Arkesia and do battle against a demon invasion in Smilegate\'s free-to-play ARPG Lost Ark!',
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
        short_description: 'Battle the odds in a 100v1 death match in PUBG: Battlegrounds, the classic free-to-play battle royale experience.',
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
        short_description: 'Step into the most famous battles of World War II in Enlisted, a free-to-play shooter from the makers of War Thunder. Experience squad-based combat from the ground level, as you command your troops, outfitted with era-authentic weapons and gear, in massive battles with over a hundred soldiers apiece.',
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
        short_description: 'Fame and glory await you in Westeros, in Game of Thrones: Winter Is Coming, the officially licensed free-to-play browser game based on the epic fantasy series by George R.R. Martin.',
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
        short_description: 'Drakensang Online is a free to play 3D action RPG game that features extraordinary 3D graphics and effects and heralds the next generation of free-to-play online browser games. With the ability to customize your character, skills and magic powers like never before, join your comrades to wage a brutal war against evil.',
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
        short_description: 'Take part in huge intergalactic battles and take on the whole galaxy in DarkOrbit, the free-to-play browser-based space combat MMO from Bigpoint -- now in 3-D! Choose your faction and your ship, each with their own strengths, and take off into adventure!',
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
        short_description: 'Trick out your ride and take to the post-apocalyptic roads for battle in Crossout, the free-to-play vehicular combat game from Gaijin Entertainment! Featuring a vehicle design system with endless customization and fast-paced, armor-crunching combat, Crossout offers high-octane excitement in brief and explosive matches.',
        game_url: 'https://www.mmobomb.com/open/crossout',
        genre: 'Shooter',
        platform: 'PC (Windows)',
        publisher: 'Targem',
        developer: 'Gaijin',
        release_date: '2017-05-30',
        profile_url: 'https://www.mmobomb.com/crossout',
    },
];

const gamesData = games.map(game => ({ ...game, isNew: game.release_date.includes('2022') }));

function createCardElement(game) {
    const template = document.querySelector('[data-type="card-template"]');

    if (!template) {
        console.error('Template not found');
        return null;
    }

    const clone = document.importNode(template.content, true);

    const gameTitleElement = clone.querySelector('.Games__cards_top_text_title');
    if (gameTitleElement) {
        gameTitleElement.textContent = game.title;
    } else {
        console.error('Element with class .Games__cards_top_text_title not found');
    }

    const gameDescriptionElement = clone.querySelector('.Games__cards_top_text_p');
    if (gameDescriptionElement) {
        gameDescriptionElement.textContent = `Description: ${game.short_description}`;
    } else {
        console.error('Element with class .Games__cards_top_text_p not found');
    }

    const genreElement = clone.querySelector('.Games__cards_btm_name:nth-child(1)');
    if (genreElement) {
        genreElement.textContent = `Genre: ${game.genre}`;
    }

    const platformElement = clone.querySelector('.Games__cards_btm_name:nth-child(2)');
    if (platformElement) {
        platformElement.textContent = `Platform: ${game.platform}`;
    }

    const publisherElement = clone.querySelector('.Games__cards_btm_name:nth-child(3)');
    if (publisherElement) {
        publisherElement.textContent = `Publisher: ${game.publisher}`;
    }

    const developerElement = clone.querySelector('.Games__cards_btm_name:nth-child(4)');
    if (developerElement) {
        developerElement.textContent = `Developer: ${game.developer}`;
    }

    const releaseDateElement = clone.querySelector('.Games__cards_btm_name:nth-child(5)');
    if (releaseDateElement) {
        releaseDateElement.textContent = `Release Date: ${game.release_date}`;
    }

    return clone;
}

function renderGames(games) {
    const cardContainer = document.querySelector('[data-type="card-container"]');

    if (!cardContainer) {
        console.error('Card container not found');
        return;
    }

    cardContainer.innerHTML = '';

    games.forEach(game => {
        const cardElement = createCardElement(game);
        if (cardElement) {
            cardContainer.appendChild(cardElement);
        }
    });
}

function filterGames() {
    const filterForm = document.getElementById('filterForm');
    filterForm.addEventListener('change', () => {
        const isNewChecked = document.getElementById('new_games').checked;
        const isOldChecked = document.getElementById('old_games').checked;

        const filteredGames = gamesData.filter(game => {
            return (isNewChecked && game.isNew) || (isOldChecked && !game.isNew);
        });

        renderGames(filteredGames);
    });
}

function init() {
    renderGames(gamesData);
    filterGames();

    // Додавання обробників подій для інших фільтрів
    const gamePropertiesSelect = document.getElementById('game_properties');
    const platformRadio = document.getElementById('platform');
    const onlineGamesRadio = document.getElementById('online-games');

    gamePropertiesSelect.addEventListener('change', () => {
        // Опрацювання події для фільтру "Genre"
        const selectedGenre = gamePropertiesSelect.value;
        filterByGenre(selectedGenre);
    });

    platformRadio.addEventListener('change', () => {
        // Опрацювання події для фільтру "Platform"
        const selectedPlatform = platformRadio.value;
        filterByPlatform(selectedPlatform);
    });

    onlineGamesRadio.addEventListener('change', () => {
        // Опрацювання події для фільтру "Online games"
        const isOnlineChecked = onlineGamesRadio.checked;
        filterByOnlineGames(isOnlineChecked);
    });
}

document.addEventListener('DOMContentLoaded', init);
