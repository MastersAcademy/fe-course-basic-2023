import Card from "../card/Card.jsx";
import gamesMock from "../../constants/games.js";
import {useEffect, useState} from "react";
import fetchGames from "../../services/games.js";

const Home = () => {
    const [games, setGames] = useState(gamesMock);
    console.log(games)


    useEffect( () => {
        async function fetchData() {
            const games = await fetchGames(); //browser, pc, all
            setGames(games.slice(0, 50));
        }
        fetchData();
    }, [])


    return <ul style={{listStyle: "none", display: "flex", gap: 50, flexWrap: "wrap"}}>
        {/*{games.map((game) => {*/}
        {/*        return <li key={game.id}>*/}
        {/*            <Card*/}
        {/*                title={game.title}*/}
        {/*                description={game.short_description.slice(0, 100)}*/}
        {/*                image={game.thumbnail}*/}
        {/*                platform={game.platform}*/}
        {/*            />*/}
        {/*        </li>*/}
        {/*    })}*/}
            <li>
                <Card
                    title="Call of Duty 2"
                    description="Call of Duty 2 is a 2005 first-person shooter video game developed by Infinity Ward and published by Activision in most regions of the world."
                    image="https://www.mmobomb.com/g/1136/thumbnail.jpg"
                    platform="PC"
                />
            </li>
        </ul>
}

export default Home;
