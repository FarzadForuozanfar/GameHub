import useGenres, { Genre } from "../hooks/useGenres"

const GenreList = () => {
  const {data} = useGenres();
  return (
    <div>GenreList</div>
  )
}

export default GenreList