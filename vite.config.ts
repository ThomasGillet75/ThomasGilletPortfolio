import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "node:path";


export default defineConfig({
    base: '/ThomasGilletPortfolio/',
    plugins: [react()],
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, './src/styles'),
        },
    },
})
