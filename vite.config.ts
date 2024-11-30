import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteTsconfigPaths(),
        svgrPlugin(),
    ],
    build: {
        outDir: 'dist',
        sourcemap: true,
    },
    server: {
        host: '0.0.0.0',
        port: 4173,
        open: true,
    },
    preview: {
        port: 3525,
    },
})
