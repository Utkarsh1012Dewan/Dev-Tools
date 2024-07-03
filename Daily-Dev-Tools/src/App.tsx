import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grid, GridItem, Box } from '@chakra-ui/react';
import Home from './Components/Home'
import JsonComparer from './Tool-Components/JsonComparer';
import JsonFormatter from './Tool-Components/JsonFormatter';
import SqlFormatter from './Tool-Components/SqlFormatter';
import RandomTextGenerator from './Tool-Components/RandomTextGenerator';
import TextComparer from './Tool-Components/TextComparer';
import JsonValidator from './Tool-Components/JsonValidator';
import CurlFormatter from './Tool-Components/CurlFormatter';
import CharacterCount from './Tool-Components/CharacterCount';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import TestComponent from './Tool-Components/TestComponent';

export default function App() {
  return (
    <Router>
      <Grid
        templateAreas={{
          base: `"header" "main"`,
          lg: `"header header" "nav main"`
        }}
        templateColumns={{
          base: '1fr',
          lg: 'auto 1fr'
        }}
        minHeight="100vh"
      >
        <GridItem area="header">
          <Header />
        </GridItem>
        <GridItem area="nav" width={{ lg: '200px' }} display={{ base: 'none', lg: 'block' }}>
          <Navbar />
        </GridItem>
        <GridItem area="main" overflowY="auto">
          <Box p={4}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/JsonFormatter" element={<JsonFormatter />} />
              <Route path="/JsonComparer" element={<JsonComparer />} />
              <Route path="/SQLFormatter" element={<SqlFormatter />} />
              <Route path="/LoremIpsumGenerator" element={<RandomTextGenerator />} />
              <Route path="/TextComparer" element={<TextComparer />} />
              <Route path="/JsonValidator" element={<JsonValidator />} />
              <Route path="/CurlFormatter" element={<CurlFormatter />} />
              <Route path="/CharacterCount" element={<CharacterCount />} />
              <Route path="/TestComponent" element={<TestComponent />} />
            </Routes>
          </Box>
        </GridItem>
      </Grid>
    </Router>
  )
}