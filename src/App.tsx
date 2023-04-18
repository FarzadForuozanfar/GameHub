
import { useState } from 'react'
import './App.css'
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';

export interface GameQuery {
  genre: Genre | null,
  platform: Platform | null,
  sortOrder: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,
    }}
      templateColumns={{
        base: '1fr',
        lg: '215px 1fr'
      }}
    >
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={4}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <HStack spacing={4} paddingLeft={10} >
          <PlatformSelector selectedPlatform={gameQuery.platform} onSeletePlatform={(platform) => setGameQuery({...gameQuery, platform})} />
          <SortSelector selectedSortOrder={gameQuery.sortOrder} onSelecteSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
