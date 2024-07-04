import { Box, SimpleGrid } from "@chakra-ui/react";
import ToolCard from "../helper-Tool-components/ToolCard";

const Home = () => {

    const tools = [
        { name: 'Json Formatter', path: '/JsonFormatter', description: 'Format your json files to a readable format.' },
        { name: 'SQL Formatter', path: '/SQLFormatter', description: 'Format your sql queries to readable format.' },
        { name: 'Curl Formatter', path: '/CurlFormatter', description: 'Format your curl commands to a readable format.' },
        { name: 'Lorem-Ipsum Generator', path: '/LoremIpsumGenerator', description: 'Generate random text using Lorem-Ipsum API.' },
        { name: 'Character Count', path: '/CharacterCount', description: 'Count the number of words, letters, lines and paragraphs in your text.' },
        { name: 'Json Comparer', path: '/JsonComparer', description: 'Compare data of 2 json files and compare their differences.' },
        { name: 'Text Comparer', path: '/TextComparer', description: 'Simply compare two text files to spot out the differences' },
        { name: 'Json Validator', path: '/JsonValidator', description: 'Validate your json file to see whether or not they have the correct format' },
        { name: 'A component just for testing shit', path: '/TestComponent', description: 'Count the number of words, letters, lines and paragraphs in your text' }

    ];


    return (
        <Box as="main" p={3} pl={{ lg: 6 }}>
            <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} spacing={10}>
                {tools.map((tool, index) => (
                    <ToolCard key={index}{...tool} />
                ))}
            </SimpleGrid>
            {/* Your SimpleGrid of tool cards here */}
        </Box>

    )
}

export default Home