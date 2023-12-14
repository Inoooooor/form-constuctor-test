import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

import ViteSassPlugin from "vite-plugin-sass"

import vuetify from "vite-plugin-vuetify"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteSassPlugin(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
