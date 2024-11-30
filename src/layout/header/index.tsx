import { Box, Text } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import SimpleDrawer from '../../components/common/drawer'
import { MenuProfile } from '../../components/common/menu'
import { useCheckToken } from '../../hooks/checkToken'
import { useLogout } from '../../hooks/logout'
import React from 'react'

interface ImageProps {
    src?: string
    isMyAccount?: boolean
}

const Header: React.FC<ImageProps> = ({
    src,
}: ImageProps): React.ReactElement => {
    const { pathname } = useLocation()
    const isHome = pathname === '/' || pathname === '/login' ? undefined : '/'
    const behaviorCursor = !isHome ? 'default' : 'pointer'

    return (
        <Box
            backgroundColor="red.200"
            border="1px"
            display="flex"
            justifyContent="space-between"
            position="sticky"
            alignItems="center"
            p={2}
        >
            <SimpleDrawer isLogged={useCheckToken()} />
            <Link to="/">
                <Text
                    cursor={behaviorCursor}
                    fontSize={{ base: '40px' }}
                    color="gray.700"
                >
                    Waifuland
                </Text>
            </Link>
            <Box>
                <MenuProfile
                    src={src}
                    onMyAccount={() =>
                        pathname === '/account'
                            ? undefined
                            : window.location.replace('/account')
                    }
                    onLogout={() =>
                        useLogout() ? window.location.replace('/login') : false
                    }
                    isLogged={useCheckToken()}
                />
            </Box>
        </Box>
    )
}

export default Header
