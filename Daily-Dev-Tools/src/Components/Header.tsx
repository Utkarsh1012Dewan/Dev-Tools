import { HStack, Image, Input, Text } from '@chakra-ui/react'
import Design from '../assets/Design.webp'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <HStack justifyContent="space-between">
            <HStack>
                <Link to={"/"}>
                    <HStack>
                        <Image src={Design} alt="logo" boxSize={"60px"} />
                        <Text color="#00e5ff">Daily-Dev-Tools.com</Text>
                    </HStack>

                </Link>

            </HStack>
            <Input placeholder="Tool Name" variant="md" color="white" width="200px" margin="10px" />
        </HStack >
    )
}

export default Header