export {}

declare global {
    interface Window {
        config: {
            baseUrl: string
            port: number
        }
    }
}
