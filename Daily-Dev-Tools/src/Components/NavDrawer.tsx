import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Text,
    Hide,
    Heading,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { formatters } from '../data/tools';


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
                        <Heading size="md" className="italic" >Formatters</Heading>
                        {formatters.map((tool, index) => (
                            <Link to={tool.path} key={index}>
                                <Text onClick={onClose} className="pb-5">{tool.name}</Text>
                            </Link>
                        ))}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default NavDrawer