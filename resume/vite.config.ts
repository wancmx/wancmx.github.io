import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //文件系统路径的别名, 绝对路径
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
