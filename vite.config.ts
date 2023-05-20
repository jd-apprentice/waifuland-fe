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
    mode: 'production',
    build: {
        outDir: 'dist',
        sourcemap: true,
    },
    esbuild: {
        jsxInject: `import React from 'react'`,
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
