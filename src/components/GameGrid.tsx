import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";

interface Props{
    selectedGenre: Genre | null,
    selectedPlatform: Platform | null,
}
const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {
    const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
    const skeleton = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, }} padding={10} spacing={10}>
                {isLoading &&
                    skeleton.map(skeleton => <GameCardSkeleton key={skeleton} />)}
                {data.map(game =>
                    <GameCard game={game} key={game.id} />)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid