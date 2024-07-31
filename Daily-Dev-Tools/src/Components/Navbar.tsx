import { VStack, Text, Box, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { comparers, formatters, textComponents } from '../data/tools';


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
        <Box height="100%" overflowY="auto" >
            <VStack align="stretch" spacing={6}
                className="pl-3 mt-5" backgroundColor={"#111827"}>
                <Heading size="md" className="italic" >Formatters</Heading>
                {formatters.map((tool, index) => (
                    <Link to={tool.path} key={index}>
                        <Text>{tool.name}</Text>
                    </Link>
                ))}
            </VStack>
            <VStack align="stretch" spacing={5}
                className="pl-3 pt-5" backgroundColor={"#111827"}>
                <Heading size="md" className="italic" >Text-Based-Tools</Heading>
                {textComponents.map((tool, index) => (
                    <Link to={tool.path} key={index}>
                        <Text>{tool.name}</Text>
                    </Link>
                ))}
            </VStack>
            <VStack align="stretch" spacing={6}
                className="pl-3 pt-5" backgroundColor={"#111827"}>
                <Heading size="md" className="italic" >Comparers</Heading>
                {comparers.map((tool, index) => (
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