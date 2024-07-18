import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Text,
    Hide,
} from '@chakra-ui/react'
import React from 'react'
import { tools } from './Navbar';
import { Link } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";


function NavDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement | null>(null);
    return (
        <>
            <Hide above='lg'>
                <Button ref={btnRef} colorScheme='teal'
                    onClick={onOpen}
                >
                    Open
                </Button>
            </Hide>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>SELECT A TOOL</DrawerHeader>

                    <DrawerBody>
                        {tools.map((tool, index) => (
                            <Link to={tool.path} key={index}>
                                <Text>{tool.name}</Text>
                            </Link>
                        ))}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default NavDrawer