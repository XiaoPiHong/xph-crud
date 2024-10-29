import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      dts({
        entryRoot: path.resolve(__dirname, "packages"),
        outDir: path.resolve(__dirname, "dist/types"),
      }),
    ],
    resolve: {
      alias: [
        { find: "xph-crud", replacement: path.resolve(__dirname, "packages") },
      ],
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, "packages/index.ts"),
        name: "xph-crud",
        fileName: "index",
      },
      rollupOptions: {
        external: ["react", "react-dom", "antd", "@ant-design/icons", "dayjs"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "@ant-design/icons": "AntDesignIcons",
            antd: "Antd",
            dayjs: "Dayjs",
          },
        },
      },
    },
    esbuild: {
      drop: ["console", "debugger"], // 移除所有 console 和 debugger
    },
  };
});
