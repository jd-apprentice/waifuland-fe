import DefaultLayout from '../../layout'
import { Login } from '../../components'
import api from '../../services/base/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_ERRORS, LOGIN_ERRORS } from '../../const/errors'

export const LoginView = () => {
    const location = useNavigate()
    const [hasErrors, setHasErrors] = useState<boolean>(false)
    const [errors, setErrors] = useState<string>()
    const [payload, setPayload] = useState({ username: '', password: '' })

    const login = async () => {
        const waifuApi = api.userApi
        const { username, password } = payload
        const response = await waifuApi.login(username, password)
        // When the server is sleeping, the response is different from the expected one
        const serverErrors = API_ERRORS[response?.kind]?.code
        // When the server is awake, the response is the expected one
        const hasErrors = LOGIN_ERRORS[response?.output?.payload?.message]?.code
        if (hasErrors) {
            setHasErrors(true)
            setErrors(LOGIN_ERRORS[response?.output?.payload?.message]?.message)
            return
        }
        if (serverErrors) {
            setHasErrors(true)
            setErrors(API_ERRORS[response?.kind]?.message)
            return
        }
        api.api.setToken(response?.token)
        localStorage.setItem('token', response?.token)
        localStorage.setItem('user', response?.picture)
        return location('/')
    }

    return (
        <DefaultLayout
            route={
                <Login
                    hasErrors={hasErrors}
                    responseError={errors}
                    onChange={(user, pass) =>
                        setPayload({ username: user, password: pass })
                    }
                    onClick={login}
                />
            }
        />
    )
}
