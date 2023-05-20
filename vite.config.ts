import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({ jsxRuntime: 'classic' }),
        viteTsconfigPaths(),
        svgrPlugin(),
    ],
    mode: 'production',
    build: {
        outDir: 'dist',
        sourcemap: true,
    },
    server: {
        host: true,
        port: 3500,
    },
    preview: {
        port: 3525,
        open: true,
    },
})
