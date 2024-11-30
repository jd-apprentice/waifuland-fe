import {
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Text,
    IconButton,
    DrawerFooter,
    Box,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { DiGithubAlt } from 'react-icons/di'
import { IconButtonCustom } from '../iconButton'
import React from 'react'
import { Link } from 'react-router-dom'

const SimpleDrawer: React.FC<{ isLogged: boolean }> = ({
    isLogged,
}: {
    isLogged: boolean
}): React.ReactElement => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <React.Fragment>
            <Box visibility={isLogged ? 'visible' : 'hidden'}>
                <IconButton
                    onClick={onOpen}
                    icon={<HamburgerIcon />}
                    aria-label={'Menu'}
                />
            </Box>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Waifuland</DrawerHeader>

                    <DrawerBody>
                        <Link to="/">
                            <Text>Home</Text>
                        </Link>
                        <Link to="/docs">
                            <Text>Documentation</Text>
                        </Link>
                        <Link to="/images">
                            <Text>Images</Text>
                        </Link>
                    </DrawerBody>
                    <DrawerFooter display="flex" justifyContent="center">
                        <IconButtonCustom
                            link="https://github.com/jd-apprentice/waifuland-fe"
                            icon={DiGithubAlt}
                        />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </React.Fragment>
    )
}

export default SimpleDrawer
