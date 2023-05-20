import DefaultLayout from '../../layout'
import { Doc } from '../../components'
import { useEffect } from 'react'
import { useCheckToken } from '../../hooks/checkToken'
import api from '../../services/base/api'

export const DocsView = () => {
    useEffect(() => {
        useCheckToken()
    }, [api.api.token])

    return <DefaultLayout route={<Doc />} />
}
