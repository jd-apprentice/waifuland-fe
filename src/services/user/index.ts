import { Api } from '../base/api'
import { getGeneralApiProblem } from '../base/apiProblem'

export class UserApi {
    private api: Api

    constructor(api: Api) {
        this.api = api
    }

    /**
     * @description Login a user with a username and password
     * @param {string} username - The username of the user
     * @param {string} password - The password of the user
     */

    // Send username and password in the body of the request
    async login(username: string, password: string): Promise<any> {
        try {
            const response = await this.api.apisauce.post('user/login', {
                username,
                password,
            })
            if (!response.ok) {
                const problem = getGeneralApiProblem(response)
                if (problem) return problem
            }

            const { data } = response
            return data
        } catch (e) {
            return { kind: 'bad-data' }
        }
    }

    /**
     * @description Get user information
     * @param {string} token - The token of the user
     */

    // Send token in the header of the request
    async getUserInfo(token: string): Promise<unknown> {
        try {
            const response = await this.api.apisauce.get('user/info', { token })
            if (!response.ok) {
                const problem = getGeneralApiProblem(response)
                if (problem) return problem
            }
            const { data } = response
            return data
        } catch (e) {
            return { kind: 'bad-data' }
        }
    }

    /**
     * @description Update user information
     * @param { File } image - The picture of the user
     */

    async updateUserInfo(id: string, image: File): Promise<unknown> {
        try {
            // Create a FormData object
            const form = new FormData()
            form.append('id', id)
            form.append('image', image)
            // Send the form data in the body of the request
            const response = await this.api.apisauce.patch('user', form, {
                headers: {
                    'Content-Type':
                        'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'PATCH',
                },
            })
            if (!response.ok) {
                const problem = getGeneralApiProblem(response)
                if (problem) return problem
            }
            const { data } = response
            return data
        } catch (e) {
            return { kind: 'bad-data' }
        }
    }
}
