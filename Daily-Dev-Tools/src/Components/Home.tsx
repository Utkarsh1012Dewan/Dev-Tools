import { Grid, GridItem, Hide } from '@chakra-ui/react'
import Header from './Header'
import Main from './Main'
import Navbar from './Navbar'

const Home = () => {
    return (
        <Grid>
            <GridItem pl='2' area={'header'}>
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
        </Grid>
    )
}
export default Home