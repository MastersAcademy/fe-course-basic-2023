function initGames() {
    // games-mock.js
    const games = [
        {
            id: 1136,
            title: 'Overwatch 2',
            thumbnail: 'https://www.mmobomb.com/g/1136/thumbnail.jpg',
            shortDescription: 'Big changes come to the Overwatch formula in this sequel...and so does PvE content, eventually.',
            gameUrl: 'https://www.mmobomb.com/open/overwatch-2',
            genre: 'Shooter',
            platform: 'PC (Windows)',
            publisher: 'Activision Blizzard King',
            developer: 'Blizzard Entertainment',
            releaseDate: '2022-10-04',
            profileUrl: 'https://www.mmobomb.com/overwatch-2',
        },
        {
            id: 523,
            title: 'Lost Ark',
            thumbnail: 'https://www.mmobomb.com/g/523/thumbnail.jpg',
            shortDescription: 'Journey throughout the realm of Arkesia and do battle against a demon invasion in Smilegate\'s free-to-play ARPG Lost Ark!',
            gameUrl: 'https://www.mmobomb.com/open/lost-ark',
            genre: 'ARPG',
            platform: 'PC (Windows)',
            publisher: 'Amazon Games',
            developer: 'Smilegate',
            releaseDate: '2022-02-11',
            profileUrl: 'https://www.mmobomb.com/lost-ark',
        },
        {
            id: 1113,
            title: 'PUBG: BATTLEGROUNDS',
            thumbnail: 'https://www.mmobomb.com/g/1113/thumbnail.jpg',
            shortDescription: 'Battle the odds in a 100v1 death match in PUBG: Battlegrounds, the classic free-to-play battle royale experience.',
            gameUrl: 'https://www.mmobomb.com/open/pubg',
            genre: 'Shooter',
            platform: 'PC (Windows)',
            publisher: 'KRAFTON, Inc.',
            developer: 'KRAFTON, Inc.',
            releaseDate: '2022-01-12',
            profileUrl: 'https://www.mmobomb.com/pubg',
        },
        {
            id: 508,
            title: 'Enlisted',
            thumbnail: 'https://www.mmobomb.com/g/508/thumbnail.jpg',
            shortDescription: 'Step into the most famous battles of World War II in Enlisted, a free-to-play shooter from the makers of War Thunder. Experience squad-based combat from the ground level, as you command your troops, outfitted with era-authentic weapons and gear, in massive battles with over a hundred soldiers apiece.',
            gameUrl: 'https://www.mmobomb.com/open/enlisted',
            genre: 'Shooter',
            platform: 'PC (Windows)',
            publisher: 'Gaijin Entertainment',
            developer: 'Darkflow Software',
            releaseDate: '2021-04-08',
            profileUrl: 'https://www.mmobomb.com/enlisted',
        },
        {
            id: 1120,
            title: 'Fall Guys',
            thumbnail: 'https://www.mmobomb.com/g/1120/thumbnail.jpg',
            shortDescription: 'Fall Guys is a free-to-play massively multiplayer party royale game.',
            gameUrl: 'https://www.mmobomb.com/open/fall-guys',
            genre: 'Battle Royale',
            platform: 'PC (Windows)',
            publisher: 'Mediatonic',
            developer: 'Mediatonic',
            releaseDate: '2020-08-04',
            profileUrl: 'https://www.mmobomb.com/fall-guys',
        },
        {
            id: 340,
            title: 'Game Of Thrones Winter Is Coming',
            thumbnail: 'https://www.mmobomb.com/g/340/thumbnail.jpg',
            shortDescription: 'Fame and glory await you in Westeros, in Game of Thrones: Winter Is Coming, the officially licensed free-to-play browser game based on the epic fantasy series by George R.R. Martin.',
            gameUrl: 'https://www.mmobomb.com/open/game-of-thrones-winter-is-coming',
            genre: 'Strategy',
            platform: 'Web Browser',
            publisher: 'GTArcade',
            developer: 'YOOZOO Games ',
            releaseDate: '2019-11-14',
            profileUrl: 'https://www.mmobomb.com/game-of-thrones-winter-is-coming',
        },
        {
            id: 427,
            title: 'Drakensang Online',
            thumbnail: 'https://www.mmobomb.com/g/427/thumbnail.jpg',
            shortDescription: 'Drakensang Online is a free to play 3D action RPG game that features extraordinary 3D graphics and effects and heralds the next generation of free-to-play online browser games. With the ability to customize your character, skills and magic powers like never before, join your comrades to wage a brutal war against evil.',
            gameUrl: 'https://www.mmobomb.com/open/drakensang-online',
            genre: 'MMORPG',
            platform: 'Web Browser',
            publisher: 'Bigpoint',
            developer: 'Bigpoint',
            releaseDate: '2011-08-08',
            profileUrl: 'https://www.mmobomb.com/drakensang-online',
        },
        {
            id: 380,
            title: 'Dark Orbit Reloaded',
            thumbnail: 'https://www.mmobomb.com/g/380/thumbnail.jpg',
            shortDescription: 'Take part in huge intergalactic battles and take on the whole galaxy in DarkOrbit, the free-to-play browser-based space combat MMO from Bigpoint -- now in 3-D! Choose your faction and your ship, each with their own strengths, and take off into adventure!',
            gameUrl: 'https://www.mmobomb.com/open/darkorbit',
            genre: 'Shooter',
            platform: 'Web Browser',
            publisher: 'Bigpoint',
            developer: 'Bigpoint',
            releaseDate: '2006-12-11',
            profileUrl: 'https://www.mmobomb.com/darkorbit',
        },
        {
            id: 1122,
            title: 'MultiVersus',
            thumbnail: 'https://www.mmobomb.com/g/1122/thumbnail.jpg',
            shortDescription: 'Match up in 1v1, 2v2 co-op, or 4-person free-for-all modes in this free-to-play Smash-Style Brawler!',
            gameUrl: 'https://www.mmobomb.com/open/multiversus',
            genre: 'Fighting',
            platform: 'PC (Windows)',
            publisher: 'Warner Bros. Games',
            developer: 'Player First Games',
            releaseDate: '2022-07-19',
            profileUrl: 'https://www.mmobomb.com/multiversus',
        },
        {
            id: 5,
            title: 'Crossout',
            thumbnail: 'https://www.mmobomb.com/g/5/thumbnail.jpg',
            shortDescription: 'Trick out your ride and take to the post-apocalyptic roads for battle in Crossout, the free-to-play vehicular combat game from Gaijin Entertainment! Featuring a vehicle design system with endless customization and fast-paced, armor-crunching combat, Crossout offers high-octane excitement in brief and explosive matches.',
            gameUrl: 'https://www.mmobomb.com/open/crossout',
            genre: 'Shooter',
            platform: 'PC (Windows)',
            publisher: 'Targem',
            developer: 'Gaijin',
            releaseDate: '2017-05-30',
            profileUrl: 'https://www.mmobomb.com/crossout',
        },
    ];

    const oldGames = new Date('2010-01-01');
    const FORM_FILTERS_ELEMENT = document.querySelector('[data-form-filters]');
    const TEXT_INPUT_ELEMENT = FORM_FILTERS_ELEMENT.elements['search-query'];
    const GAMES_CONTAINER_ELEMENT = document.querySelector('.card-games');
    let filteredGames = [...games];

    function createGameCardElement(game) {
        const {
            title, thumbnail, shortDescription, genre, platform, publisher,
            developer, releaseDate,
        } = game;

        const truncatedDescription = shortDescription.length > 50
            ? `${shortDescription.substring(0, 40)}...`
            : shortDescription;

        const cardTemplateStr = `
            <div class="card">
                <img class="game-card__img" src="${thumbnail}" width="90" height="90" alt="">
                <div class="game-card__top-info">
                    <span class="description__title">${title}</span>
                    <p class="description__text">${truncatedDescription}</p>
                </div>
                <ul class="card__actors">
                    <li class="card__actor">
                        <span class="bold-text">Genre:</span> ${genre}
                    </li>
                    <li class="card__actor">
                        <span class="bold-text">Platform:</span> ${platform}
                    </li>
                    <li class="card__actor">
                        <span class="bold-text">Publisher:</span> ${publisher}
                    </li>
                    <li class="card__actor">
                        <span class="bold-text">Developer:</span> ${developer}
                    </li>
                    <li class="card__actor">
                        <span class="bold-text">Release Date:</span> ${releaseDate}
                    </li>
                </ul>
            </div>
        `;

        return cardTemplateStr;
    }

    function clearGamesContainer(container) {
        if (!container) return;
        container.innerHTML = '';
    }

    function renderCards(container, cards) {
        clearGamesContainer(container);

        cards.forEach((card) => {
            const gameCard = createGameCardElement(card);
            container.innerHTML += gameCard;
        });
    }

    function filterByGamesType(cards) {
        const selectedGenreValue = FORM_FILTERS_ELEMENT.elements['games-types'].value;
        return cards.filter((card) => (selectedGenreValue
            ? card.genre === selectedGenreValue : true));
    }

    function filterByGameCategory(cards) {
        const selectedRadioValue = FORM_FILTERS_ELEMENT.elements['radio-btns'].value.toLowerCase();
        return cards.filter((card) => {
            if (selectedRadioValue === '') return true;

            if (selectedRadioValue === 'platform') {
                return card.platform.toLowerCase().includes('pc (windows)');
            }

            if (selectedRadioValue === 'online_games') {
                return card.platform.toLowerCase().includes('web browser');
            }

            return true;
        });
    }

    function filterByGameDate(cards) {
        const isNewChecked = FORM_FILTERS_ELEMENT.elements.game_date_new.checked;
        const isOldChecked = FORM_FILTERS_ELEMENT.elements.game_date_old.checked;

        return cards.filter((card) => {
            const releaseDate = new Date(card.releaseDate);
            const currentDate = new Date(oldGames);

            if (isNewChecked && isOldChecked) {
                return true;
            }
            if (isNewChecked) {
                return releaseDate >= currentDate;
            }
            if (isOldChecked) {
                return releaseDate < currentDate;
            }
            return false;
        });
    }

    function filterBySearchQuery(cards) {
        const inputValue = FORM_FILTERS_ELEMENT.elements['search-query'].value.toLowerCase();
        return cards.filter((card) => card.title.toLowerCase().includes(inputValue));
    }

    function getUpdatedFilteredCards() {
        filteredGames = [...games];

        if (FORM_FILTERS_ELEMENT.elements['games-types'].value) {
            filteredGames = filterByGamesType(filteredGames);
        }

        if (FORM_FILTERS_ELEMENT.elements.platform.checked) {
            filteredGames = filterByGameCategory(filteredGames);
        }

        if (FORM_FILTERS_ELEMENT.elements.game_date_new.checked
            || FORM_FILTERS_ELEMENT.elements.game_date_old.checked) {
            filteredGames = filterByGameDate(filteredGames);
        }

        if (FORM_FILTERS_ELEMENT.elements['search-query'].value) {
            filteredGames = filterBySearchQuery(filteredGames);
        }
        return filteredGames;
    }

    function onChangeFiltersHandler() {
        const updatedFilteredGames = getUpdatedFilteredCards();
        renderCards(GAMES_CONTAINER_ELEMENT, updatedFilteredGames);
    }

    function onInputSearchHandler() {
        const updatedFilteredCards = filterBySearchQuery(games);
        renderCards(GAMES_CONTAINER_ELEMENT, updatedFilteredCards);
    }

    function onSubmitFiltersHandler(event) {
        event.preventDefault();
        onChangeFiltersHandler();
    }

    renderCards(GAMES_CONTAINER_ELEMENT, games);
    TEXT_INPUT_ELEMENT.addEventListener('input', onInputSearchHandler);
    FORM_FILTERS_ELEMENT.addEventListener('change', onChangeFiltersHandler);
    FORM_FILTERS_ELEMENT.addEventListener('submit', onSubmitFiltersHandler);
}

document.addEventListener('DOMContentLoaded', initGames);
