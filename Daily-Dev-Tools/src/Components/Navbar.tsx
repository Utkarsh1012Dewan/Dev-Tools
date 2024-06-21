import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {

    const names = ['Json Formatter', 'Json Comparer', 'SQL Formatter', 'Lorem-Ipsum Generator', 'Text Comparer', 'Json Validator', 'Curl Formatter', 'Character Count']

    return (
        <Box >
            {names.map((i) => (
                <Text>{i}</Text>
            ))}
        </Box>
    )
}

export default Navbar