/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_KEY: string
    readonly VITE_PORT: number
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
