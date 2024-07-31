import { HStack, Heading, Image, Input, Kbd, defineStyle, defineStyleConfig, useMediaQuery } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import newLogo from '../assets/newLogo.png'
import NavDrawer from './NavDrawer';


const xl = defineStyle({
    fontSize: 'xl',
})

export const kbdTheme = defineStyleConfig({
    sizes: { xl },
})

const Header = () => {
    const [isLargerThan768x848] = useMediaQuery('(min-width: 768px) and (min-height: 848px)')

    return (
        <HStack justifyContent="space-between" className="px-3">
            <HStack>
                <Link to={"/"}>
                    <HStack>
                        <NavDrawer />
                        <Image src={newLogo} alt="logo" boxSize={"60px"} />
                        <Heading fontFamily="sans-serif" color="#00e5ff" fontSize={{ "sm": "xl", "md": "2xl", "lg": "3xl" }}>Daily-Dev-Tools.com</Heading>
                    </HStack>
                </Link>
            </HStack>
            {isLargerThan768x848 && (
                <HStack>
                    <span>
                        <Kbd size="xl">shift</Kbd> + <Kbd>H</Kbd>
                    </span>
                    <Input placeholder="Tool Name" variant="md" color="white" width="200px" margin="10px" backgroundColor="purple" />
                </HStack>
            )}
        </HStack>
    )
}

export default Header