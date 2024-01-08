const apiUrl = 'https://mmo-games.p.rapidapi.com/games';
const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
        'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
    },
};

// eslint-disable-next-line consistent-return
const fetchGames = async (platform) => {
    let query = '';
    if (platform) {
        query = `?platform=${platform}`;
    }
    const url = new URL(`${apiUrl}${query}`);
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error('Error fetching games:', error);
        return error;
    }
};

export default fetchGames;
