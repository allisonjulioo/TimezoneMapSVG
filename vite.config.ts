import { quasar } from "@quasar/vite-plugin";
import vue from "@vitejs/plugin-vue";
import path from "path/posix";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./jest.config.js",
  },
  plugins: [
    vue(),
    quasar({
      sassVariables: "src/assets/sass/quasar-variables.sass",
    }),
  ],
  resolve: {
    alias: [{ find: "~", replacement: path.resolve(__dirname, "src") }],
  },
});
