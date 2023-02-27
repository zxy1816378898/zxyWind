import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
    }),
  ],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    alias: {
      "@": "/src",
    },
  },

  server: {
    port: 97,
    host: true,
    open: true,
    hmr: true,
    proxy: {
      "/dev-api": {
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/dev-api/, ""),
      },
    },
  },
  scripts: {
    dev: "cross-env NODE_ENV=development vite",
  },
  base: "/",
  publicDir: "public",
  publicPath: "/dist",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/_mixin.scss";',
      },
    },
  },
});
