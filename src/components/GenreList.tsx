import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres"
import getCropedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map(genre =>
        <ListItem paddingY={'5px'} key={genre.slug}>
          <HStack>
            <Image boxSize={'32px'} borderRadius={8} src={getCropedImageUrl(genre.image_background)}/>
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList