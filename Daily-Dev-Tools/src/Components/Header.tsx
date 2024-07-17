import { HStack, Hide, Image, Input, Kbd, Text, defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'


const xl = defineStyle({
    fontSize: 'xl',
})

export const kbdTheme = defineStyleConfig({
    sizes: { xl },
})

const Header = () => {
    return (
        <HStack justifyContent="space-between">
            <HStack>
                <Link to={"/"}>
                    <HStack>
                        <Image src={logo} alt="logo" boxSize={"60px"} />
                        <Text fontFamily="sans-serif" color="#00e5ff" fontSize={{ "sm": "xl", "md": "2xl", "lg": "3xl" }}>Daily-Dev-Tools.com</Text>
                    </HStack>
                </Link>
            </HStack>
            <Hide below="md">
                <HStack>
                    <span>
                        <Kbd size="xl">shift</Kbd> + <Kbd>H</Kbd>
                    </span>
                    <Input placeholder="Tool Name" variant="md" color="white" width="200px" margin="10px" backgroundColor="purple" />
                </HStack>
            </Hide>
        </HStack >
    )
}

export default Header