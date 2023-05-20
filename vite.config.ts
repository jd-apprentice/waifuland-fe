import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteTsconfigPaths(),
        svgrPlugin(),
    ],
    resolve: {
        alias: [
            { find: /^~/, replacement: '' },
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src'),
            },
        ],
    },
    build: {
        outDir: 'dist',
    },
    server: {
        host: true,
        port: 3500,
    },
    preview: {
        port: 3525,
    },
})
