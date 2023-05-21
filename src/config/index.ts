export const config = {
    baseUrl: import.meta.env.PROD ? import.meta.env.VITE_BASE_URL : 'https://waifuland-api.onrender.com/api',
    port: import.meta.env.PROD ? import.meta.env.VITE_PORT : 3500,
}
