import './App.css'
import { Grid, GridItem, Hide } from '@chakra-ui/react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
export default function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main" "footer"`,
        lg: `"header header" "nav main" "footer footer"`
      }}
      color='blackAlpha.700'
      fontWeight='bold'
      gap={6}
    >
      <GridItem pl='2' area={'header'}  >
        <Header />
      </GridItem>
      <Hide below='lg'>
        <GridItem pl='2' bg='pink.300' area={'nav'} className='pt-6'>
          <Navbar />
        </GridItem>
      </Hide>
      <GridItem pl='2' bg='green.300' area={'main'}>
        <Main />
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid >
  )
}
