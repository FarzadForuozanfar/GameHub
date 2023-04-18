import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres"
import getCropedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
    <Heading fontSize={'25px'} marginBottom={4}>Genres</Heading>
      <List>
        {data.map(genre =>
          <ListItem paddingY={'5px'} key={genre.slug}>
            <HStack>
              <Image objectFit={'cover'} boxSize={'32px'} borderRadius={8} src={getCropedImageUrl(genre.image_background)} />
              <Button whiteSpace={'normal'} textAlign={'left'} overflowWrap="break-word" textTransform={genre.id === selectedGenre?.id ? "uppercase" : "none"} fontWeight={genre.id === selectedGenre?.id ? "bold" : 'normal'} onClick={() => onSelectGenre(genre)} variant={'link'}>{genre.name}</Button>
            </HStack>
          </ListItem>)}
      </List>
    </>
  )
}

export default GenreList