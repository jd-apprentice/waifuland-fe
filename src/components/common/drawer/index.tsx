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
    Link,
    DrawerFooter,
    Box,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { DiGithubAlt } from 'react-icons/di'
import { IconButtonCustom } from '../iconButton'
import React from 'react'

const SimpleDrawer: React.FC<{ isLogged: boolean }> = ({
    isLogged,
}: {
    isLogged: boolean
}): React.ReactElement => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
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
                        <Link href="/">
                            <Text>Home</Text>
                        </Link>
                        <Link href="/docs">
                            <Text>Documentation</Text>
                        </Link>
                        <Link href="/images">
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
        </>
    )
}

export default SimpleDrawer
