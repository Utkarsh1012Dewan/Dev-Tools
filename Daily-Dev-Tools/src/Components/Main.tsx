import { Card, CardBody, CardHeader, Heading, SimpleGrid, Text } from '@chakra-ui/react'

const Main = () => {

    const names = ['Json Formatter', 'Json Comparer', 'SQL Formatter', 'Lorem-Ipsum Generator', 'Text Comparer', 'Json Validator', 'Curl Formatter', 'Character Count']
    const definations = ["Format your json to a readable format", "Compare two json files", "Format your sql queries to readable format", "Generate lorem ipsum text", "Simply compare two text files to spot out the differences", "Validate your json file to see whether or not they have the correct format", "Format a curl command to a readable format", 'Count the number of words, letters, lines and paragraphs in your text']

    const cards = names.map((name, index) => {
        return (
            <Card>
                <CardHeader>
                    <Heading size='md'>{name}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{definations[index]}</Text>
                </CardBody>
            </Card>)
    })
    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            {cards}
        </SimpleGrid>
    )
}

export default Main