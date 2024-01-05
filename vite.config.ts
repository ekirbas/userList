/// <reference types="vite-plugin-svgr/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/* import svgLoader from 'vite-svg-loader'
import svgr from "vite-plugin-svgr"; */
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true
      },
    },
  }
})
