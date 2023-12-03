// const c = console.log; // for short use console.log
const games = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
        title: 'Game Of Thrones Winter',
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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

const cardsBlock = document.querySelector('.game__item-blocks');
const searchInput = document.querySelector('.search__input');
const newCheck = document.querySelector('#checkbox-1-1');
const oldCheck = document.querySelector('#checkbox-1-2');
const dateYear = '2020-01-01';

function renderCard(
    releaseDate,
    genre,
    platform,
    thumbnail,
    title,
    shortDescription,
    publisher,
    developer,
) {
    return `<div class="item-block__game-item ">
                                <div class="game-item-item__header">
                                    <div class="header__icon">
                                        <img src="${thumbnail}" class="header__img" alt="game icon" width="90" height="90">
                                    </div>
                                    <div class="header__about">
                                        <h2 class="header__game-name cards-title">${title}</h2>
                                        <div class="about__p">${shortDescription}</div>
                                    </div>
                                </div>
                                <div class="game-item__info-list">
                                    <ul class="info-game" data-info="info">
                                        <li>
                                            <b>Genre:</b>${genre}
                                        </li>
                                        <li>
                                            <b>Platform:</b>${platform}
                                        </li>
                                        <li>
                                            <b>Publisher:</b>${publisher}
                                        </li>
                                        <li>
                                            <b>Developer:</b>${developer}
                                        </li>
                                        <li>
                                            <b>Release_date:</b>${releaseDate}
                                        </li>
                                    </ul>
                                </div>
                            </div>`;
}

document.querySelector('.search__button').onclick = function () {
    const search = games.filter((el) => el.title.startsWith(
        searchInput.value === searchInput.value.toLowerCase()
            ? searchInput.value.toUpperCase() : searchInput.value,
    ));
    cardsBlock.innerHTML = '';
    search.forEach((cards) => {
        cardsBlock.innerHTML += renderCard(
            cards.release_date,
            cards.genre,
            cards.platform,
            cards.thumbnail,
            cards.title,
            cards.short_description,
            cards.publisher,
            cards.developer,
        );
    });
};

searchInput.oninput = function () {
    newCheck.checked = false;
    oldCheck.checked = false;
    if (!this.value.length) {
        cardsBlock.innerHTML = '';
        games.forEach((cards) => {
            cardsBlock.innerHTML += renderCard(
                cards.release_date,
                cards.genre,
                cards.platform,
                cards.thumbnail,
                cards.title,
                cards.short_description,
                cards.publisher,
                cards.developer,
            );
        });
    }
};

function checkBoxFilter(element) {
    const filterCards = games.filter((el) => {
        searchInput.value = '';
        if (newCheck.checked === true && oldCheck.checked === true) {
            return element;
        }

        if (newCheck.checked === false && oldCheck.checked === false) {
            return element;
        }

        if (element.dataset.check === 'new' && newCheck.checked === true) {
            return el.release_date >= dateYear;
        } if (oldCheck.checked === true) {
            return el.release_date <= dateYear;
        }

        if (element.dataset.check === 'old' && oldCheck.checked === true) {
            return el.release_date <= dateYear;
        } if (newCheck.checked === true) {
            return el.release_date >= dateYear;
        }
        return false;
    });
    cardsBlock.innerHTML = '';

    filterCards.forEach((cards) => {
        cardsBlock.innerHTML += renderCard(
            cards.release_date,
            cards.genre,
            cards.platform,
            cards.thumbnail,
            cards.title,
            cards.short_description,
            cards.publisher,
            cards.developer,
        );
    });
}

checkBoxFilter(dateYear);
