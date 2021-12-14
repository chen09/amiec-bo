import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            {find: '@', replacement: path.resolve(__dirname, './src')},
            {find: '~@', replacement: path.resolve(__dirname, './src')}
        ]
    },
    base: process.env.VITE_BASE_URL,
    build: {
        assetsDir: 'assets',
    },

    optimizeDeps: {
        include: ["axios"]
    },

    server: {
        proxy: {
            "/api": {
                target: "http://localhost:5000/api",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }

    }
})
