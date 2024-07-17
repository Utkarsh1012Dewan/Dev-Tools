import { Box, Heading, SimpleGrid, VStack, Highlight } from "@chakra-ui/react";
import ToolCard from "../helper-Tool-components/ToolCard";
import { comparers, formatters, textComponents } from "../data/tools";

const Home = () => {

    const tools = [
        { name: 'Json Formatter', path: '/JsonFormatter', description: 'Format your json files to a readable format.' },
        { name: 'SQL Formatter', path: '/SQLFormatter', description: 'Format your sql queries to readable format.' },
        { name: 'Curl Formatter', path: '/CurlFormatter', description: 'Format your curl commands to a readable format.' },
        { name: 'Lorem-Ipsum Generator', path: '/LoremIpsumGenerator', description: 'Generate random text using Lorem-Ipsum API.' },
        { name: 'Character Count', path: '/CharacterCount', description: 'Count the number of words, letters, lines and paragraphs in your text.' },
        { name: 'Json Comparer', path: '/JsonComparer', description: 'Compare data of 2 json files and compare their differences.' },
        { name: 'Text Comparer', path: '/TextComparer', description: 'Simply compare two text files to spot out the differences' },
        { name: 'Json Validator', path: '/JsonValidator', description: 'Validate your json file to check for correct format' },
        { name: 'A component just for testing shit', path: '/TestComponent', description: 'Count the number of words, letters, lines and paragraphs in your text' }
    ];

    return (
        <>
            <VStack alignItems={"center"} className="ml-5" >
                <Heading size={{ "md": "xl", "lg": "2xl", "xl": "3xl" }} fontFamily={"sans-serif"}>Welcome to Daily-Dev-Tools</Heading>
                <Heading size={{ "md": "lg", "lg": "xl", "xl": "2xl" }} fontFamily={"sans-serif"} className="italic">
                    Pick a tool, get to Work
                </Heading>
            </VStack >
            <Box as="main" p={3} pl={{ lg: 6 }}>

                {/* Formatters */}
                <Heading size={{ "md": "lg" }} fontFamily={"sans-serif"} className="italic mb-3">
                    Formatting Tools
                </Heading>
                <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} spacing={8} className="mb-12">
                    {formatters.map((tool, index) => (
                        <ToolCard key={index}{...tool} />
                    ))}
                </SimpleGrid>

                {/* Text-Components */}
                <Heading size={{ "md": "lg" }} fontFamily={"sans-serif"} className="italic mb-3">
                    Text-Based Tools
                </Heading>
                <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} spacing={8} className="mb-12">
                    {textComponents.map((tool, index) => (
                        <ToolCard key={index}{...tool} />
                    ))}
                </SimpleGrid>

                {/* Comparers */}
                <Heading size={{ "md": "lg" }} fontFamily={"sans-serif"} className="italic mb-3">
                    Comparers (Coming Soon)
                </Heading>
                <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} spacing={8} className="mb-10">
                    {comparers.map((tool, index) => (
                        <ToolCard key={index}{...tool} />
                    ))}
                </SimpleGrid>
            </Box>
        </>

    )
}

export default Home