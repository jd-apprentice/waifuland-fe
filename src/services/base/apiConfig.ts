/**
 * The base url of the api.
 */

const BASE_URL = import.meta.env.VITE_BASEURL

/**
 * The options used to configure the API.
 */
export interface ApiConfig {
    /**
     * The URL of the api.
     */
    url: string

    /**
     * Milliseconds before we timeout the request.
     */
    timeout: number
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
    url: BASE_URL,
    timeout: 10000,
}
