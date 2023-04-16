import { useEffect, useState } from "react"
import apiClient from "../../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    result: Game[];
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        apiClient.get<FetchGamesResponse>('/games')
            .then(response => setGames(response.data.results))
            .catch(error => setErrors(error.message));
    }, []);
    return (
        <>
            {errors && <Text>{errors}</Text>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    )
}

export default GameGrid