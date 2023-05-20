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
    esbuild: {
        jsxInject: `import * as React from 'react'`,
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
