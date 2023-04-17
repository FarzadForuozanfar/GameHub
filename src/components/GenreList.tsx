import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres"
import getCropedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error.length) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map(genre =>
        <ListItem paddingY={'5px'} key={genre.slug}>
          <HStack>
            <Image boxSize={'32px'} borderRadius={8} src={getCropedImageUrl(genre.image_background)} />
            <Button overflowWrap="break-word" textTransform={genre.id === selectedGenre?.id ? "uppercase" : "none"} fontWeight={genre.id === selectedGenre?.id ? "bold" : 'normal'} onClick={() => onSelectGenre(genre)} variant={'link'}>{genre.name}</Button>
          </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList