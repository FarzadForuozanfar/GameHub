import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";

const GameGrid = () => {
    const { games, error, isLoading } = useGames();
    const skeleton = [1, 2, 3, 4, 5, 6];
    return (
        <>
        {console.log(isLoading)}
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, }} padding={10} spacing={10}>
                {isLoading &&
                    skeleton.map(skeleton => <GameCardSkeleton key={skeleton} />)}
                {games.map(game =>
                    <GameCard game={game} key={game.id} />)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid