import { VStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const tools = [
        { name: 'Json Formatter', path: '/JsonFormatter' },
        { name: 'Json Comparer', path: '/JsonComparer' },
        { name: 'SQL Formatter', path: '/SQLFormatter' },
        { name: 'Lorem-Ipsum Generator', path: '/LoremIpsumGenerator' },
        { name: 'Text Comparer', path: '/TextComparer' },
        { name: 'Json Validator', path: '/JsonValidator' },
        { name: 'Curl Formatter', path: '/CurlFormatter' },
        { name: 'Character Count', path: '/CharacterCount' }
    ];


    return (
        <VStack align="stretch" spacing={2}>
            {tools.map((tool, index) => (
                <Link to={tool.path} key={index}>
                    <Text>{tool.name}</Text>
                </Link>
            ))}
        </VStack>
    )
}

export default Navbar