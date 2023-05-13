/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASEURL: string
    readonly VITE_VITE_PORT: number
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  