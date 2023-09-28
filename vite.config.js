import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
    }),
    viteMockServe({
      supportTs: true,
      logger: false,
      mockPath: "./mock/" // 文件位置
    })
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
        target: "https://netease-cloud-music-api-tau-orcin.vercel.app",
        rewrite: (p) => p.replace(/^\/dev-api/, ''),
      },
    },
  },

  base: "./",
  publicDir: "public",
  publicPath: "/dist",
  css: {
    //引入scss
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/_mixin.scss";',
      },
    },
  }

}
)


