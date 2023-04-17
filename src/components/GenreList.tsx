import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres"
import getCropedImageUrl from "../services/image-url";

interface Props{
  onSelectGenre: (genre : Genre) => void;
}
const GenreList = ({onSelectGenre}: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error.length) return null;
  if (isLoading) return <Spinner/>;
  return (
    <List>
      {data.map(genre =>
        <ListItem paddingY={'5px'} key={genre.slug}>
          <HStack>
            <Image boxSize={'32px'} borderRadius={8} src={getCropedImageUrl(genre.image_background)}/>
            <Button onClick={() => onSelectGenre(genre)} variant={'link'}>{genre.name}</Button>
          </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList