import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGames = () => {
    interface Game {
        id: number;
        name: string;
    }
    
    interface FetchGamesResponse {
        count: number;
        result: Game[];
    }
    
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
            .then(response => setGames(response.data.results))
            .catch(error => {
                if (error instanceof CanceledError) return;
                setError(error.message)
        });

        return () => controller.abort();
    }, []);

    return {games, error};
}

export default useGames;