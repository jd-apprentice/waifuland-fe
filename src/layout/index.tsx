import { Box } from '@chakra-ui/react'
import React, { useCallback, useEffect, useState } from 'react'
import { useCheckToken } from '../hooks/checkToken'
import Footer from '../layout/footer'
import Header from '../layout/header'
import { IUser, RouteProps } from '../models/types'
import api from '../services/base/api'

const DefaultLayout: React.FC<RouteProps> = ({ route }: RouteProps) => {
    const token = localStorage.getItem('token')
    const [user, setUser] = useState<IUser | null>()

    const validateToken = useCallback(async () => {
        const isLogged = useCheckToken()
        if (isLogged) {
            if (token) {
                api.userApi
                    .getUserInfo(token)
                    .then((response) => setUser(response as IUser))
                    .catch((error) => console.error(error))
            }
        }
    }, [user])

    useEffect(() => {
        validateToken()
    }, [])

    return (
        <React.Fragment>
            <Box>
                <Box>
                    <Header src={user?.profile_picture} />
                </Box>
                <Box>{route}</Box>
                <Box>
                    <Footer />
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default DefaultLayout
