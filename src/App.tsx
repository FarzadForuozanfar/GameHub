
import { useState } from 'react'
import './App.css'
import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading'

export interface GameQuery {
  genre: Genre | null,
  platform: Platform | null,
  sortOrder: string,
  searchText: string
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
        <Navbar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={4}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Box paddingLeft={10}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginTop={5}>
            <Box marginRight={5}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onSeletePlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
            </Box>
            <SortSelector selectedSortOrder={gameQuery.sortOrder} onSelecteSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
