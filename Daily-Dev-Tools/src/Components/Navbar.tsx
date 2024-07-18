import { VStack, Text, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


const tools = [
    { name: 'Json Formatter', path: '/JsonFormatter' },
    { name: 'Json Comparer', path: '/JsonComparer' },
    { name: 'SQL Formatter', path: '/SQLFormatter' },
    { name: 'Lorem-Ipsum Generator', path: '/LoremIpsumGenerator' },
    { name: 'Text Comparer', path: '/TextComparer' },
    { name: 'Json Validator', path: '/JsonValidator' },
    { name: 'Curl Formatter', path: '/CurlFormatter' },
    { name: 'Character Count', path: '/CharacterCount' },
    { name: 'Test Component', path: '/TestComponent' }
];

const Navbar = () => {


    return (
        <Box height="100%" overflowY="auto">
            <VStack align="stretch" spacing={5} className="" backgroundColor={"#111827"}>
                {tools.map((tool, index) => (
                    <Link to={tool.path} key={index}>
                        <Text>{tool.name}</Text>
                    </Link>
                ))}
            </VStack>
        </Box>
    )
}

export default Navbar
export { tools }