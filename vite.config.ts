/*
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-10-27 00:46:18
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-10-28 22:38:43
 * @FilePath: \novelai-tagdictionary-webui\vite.config.ts
 * @Description: 
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
