import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from './PlatformIconList';
import CriticScore from "./CriticScore";
import getCropedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} overflow={'hidden'}>
            <Image src={getCropedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent={'space-between'}>
                    <PlatformIconList key={game.id} platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading fontSize={'2xl'}>{game.name} <Emoji rating={game.rating_top}/> </Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard