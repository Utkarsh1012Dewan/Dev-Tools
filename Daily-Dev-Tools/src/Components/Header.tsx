import { HStack, Image, Input, Text } from '@chakra-ui/react'
import Design from '../assets/Design.webp'

const Header = () => {
    return (
        <HStack justifyContent="space-between">
            <HStack>
                <Image src={Design} alt="logo" boxSize={"60px"} />
                <Text color="#00e5ff">Daily-Dev-Tools.com</Text>
            </HStack>
            <Input placeholder="Tool Name" variant="md" color="white" width="200px" margin="10px" />
        </HStack >
    )
}

export default Header