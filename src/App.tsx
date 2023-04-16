
import { useState } from 'react'
import './App.css'
import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
function App() {

  return (
    <Grid templateAreas={{
      base : `"nav" "main"`,
      lg: `"nav nav" "aside main"`,
    }}>
      <GridItem area='nav' bg='gold'>nav</GridItem>
      <Show above='lg'>
        <GridItem area='aside' bg='coral'>aside</GridItem>
      </Show>
      <GridItem area='main' bg='twitter.300'>main5</GridItem>
    </Grid>
  )
}

export default App
