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

const gamesData = games.map((game) => ({ ...game, isNew: game.release_date.includes('2022') }));

function createCardElement(game) {
    const template = document.querySelector('.card-template');

    if (!template) {
        console.error('Template not found');
        return null;
    }

    const clone = document.importNode(template.content, true);

    const gameTopImgElement = clone.querySelector('[data-type="Games__cards_top_img"]');
    if (gameTopImgElement) {
        gameTopImgElement.src = game.thumbnail;
        gameTopImgElement.alt = `Thumbnail for ${game.title}`;
    } else {
        console.error('Element with data-type "Games__cards_top_img" not found');
    }

    const gameTitleElement = clone.querySelector('[data-type="Games__cards_top_text_title"]');
    if (gameTitleElement) {
        gameTitleElement.textContent = game.title;
    } else {
        console.error('Element with data-type "Games__cards_top_text_title" not found');
    }

    const gameDescriptionElement = clone.querySelector('[data-type="Games__cards_top_text_p"]');
    if (gameDescriptionElement) {
        gameDescriptionElement.textContent = `Description: ${game.short_description.substring(0, 40)}...`;
    } else {
        console.error('Element with data-type "Games__cards_top_text_p" not found');
    }

    const genreElement = clone.querySelector('[data-card-genre]');
    if (genreElement) {
        genreElement.textContent = `Genre: ${game.genre}`;
    }

    const platformElement = clone.querySelector('[data-card-platform]');
    if (platformElement) {
        platformElement.textContent = `Platform: ${game.platform}`;
    }

    const publisherElement = clone.querySelector('[data-card-publisher]');
    if (publisherElement) {
        publisherElement.textContent = `Publisher: ${game.publisher}`;
    }

    const developerElement = clone.querySelector('[data-card-developer]');
    if (developerElement) {
        developerElement.textContent = `Developer: ${game.developer}`;
    }

    const releaseDateElement = clone.querySelector('[data-card-release-date]');
    if (releaseDateElement) {
        releaseDateElement.textContent = `Release Date: ${game.release_date}`;
    }

    return clone;
}

function highlightText(element, searchText) {
    const { innerHTML } = element;
    const lowerCaseInnerHTML = innerHTML.toLowerCase();
    const lowerCaseSearchText = searchText.toLowerCase();

    element.innerHTML = innerHTML.replace(/<\/mark>/g, '').replace(/<mark>/g, '');

    let index = lowerCaseInnerHTML.indexOf(lowerCaseSearchText);

    while (index !== -1) {
        const start = innerHTML.substring(0, index);
        const match = innerHTML.substring(index, index + searchText.length);
        const end = innerHTML.substring(index + searchText.length);

        element.innerHTML = `${start}<mark>${match}</mark>${end}`;

        index = lowerCaseInnerHTML.indexOf(lowerCaseSearchText, index + 1);
    }
}

function renderGames(gamess) {
    const cardContainer = document.querySelector('[data-type="card-container"]');

    if (!cardContainer) {
        console.error('Card container not found');
        return;
    }

    const searchText = document.getElementById('search').value.toLowerCase();

    cardContainer.innerHTML = '';

    gamess.forEach((game) => {
        const cardElement = createCardElement(game);
        if (cardElement) {
            cardContainer.appendChild(cardElement);

            const elementsToHighlight = cardElement.querySelectorAll('[data-card-genre], [data-type="Games__cards_top_text_title"], [data-type="Games__cards_top_text_p"]');

            elementsToHighlight.forEach((element) => {
                highlightText(element, searchText);
            });
        }
    });
}

function filterGames() {
    const filterForm = document.getElementById('filterForm');
    const searchTextElement = document.getElementById('search');

    filterForm.addEventListener('change', () => {
        const isNewChecked = document.getElementById('new_games').checked;
        const isOldChecked = document.getElementById('old_games').checked;
        const selectedGenre = document.getElementById('game_properties').value;

        const searchText = searchTextElement.value.toLowerCase();

        const filteredGames = gamesData.filter((game) => {
            const isNewMatch = isNewChecked && game.isNew;
            const isOldMatch = isOldChecked && !game.isNew;
            const genreMatch = selectedGenre === 'Genre' || game.genre === selectedGenre;
            const titleMatch = game.title.toLowerCase().includes(searchText);
            const descriptionMatch = game.short_description.toLowerCase().includes(searchText);

            return (isNewMatch || isOldMatch) && genreMatch && (titleMatch || descriptionMatch);
        });

        renderGames(filteredGames);

        const cardElements = document.querySelectorAll('.card-template');
        cardElements.forEach((cardElement) => {
            const elementsToHighlight = cardElement.querySelectorAll('[data-card-genre], [data-type="Games__cards_top_text_title"], [data-type="Games__cards_top_text_p"]');
            elementsToHighlight.forEach((element) => {
                highlightText(element, searchText);
            });
        });
    });

    searchTextElement.addEventListener('input', () => {
        const searchText = searchTextElement.value.toLowerCase();

        const cardElements = document.querySelectorAll('[data-type="card-template"]');
        cardElements.forEach((cardElement) => {
            const elementsToHighlight = cardElement.querySelectorAll('[data-card-genre], [data-type="Games__cards_top_text_title"], [data-type="Games__cards_top_text_p"]');
            elementsToHighlight.forEach((element) => {
                highlightText(element, searchText);
            });
        });
    });
}

function init() {
    renderGames(gamesData);
    filterGames();

    // const gamePropertiesSelect = document.getElementById('game_properties');
    // const platformRadio = document.getElementById('platform');
    // const onlineGamesRadio = document.getElementById('online-games');
    const applyButton = document.getElementById('apply');

    // gamePropertiesSelect.addEventListener('change', () => {
    //     const selectedGenre = gamePropertiesSelect.value;
    //     filterByGenre(selectedGenre);
    // });
    //
    // platformRadio.addEventListener('change', () => {
    //     const selectedPlatform = platformRadio.value;
    //     filterByPlatform(selectedPlatform);
    // });
    //
    // onlineGamesRadio.addEventListener('change', () => {
    //     const isOnlineChecked = onlineGamesRadio.checked;
    //     filterByOnlineGames(isOnlineChecked);
    // });

    applyButton.addEventListener('click', () => {
        filterGames();
    });
}

document.addEventListener('DOMContentLoaded', init);
