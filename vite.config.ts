import { defineConfig, BuildOptions } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts, { PluginOptions } from "vite-plugin-dts";

const getLibBuildConfig = (mode: string): BuildOptions => {
  return {
    main: {
      lib: {
        entry: path.resolve(__dirname, "packages/index.ts"),
        name: "xph-crud",
        fileName: "index",
      },
      rollupOptions: {
        external: ["react", "react-dom", "antd", "@ant-design/icons"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "@ant-design/icons": "AntDesignIcons",
            antd: "Antd",
          },
        },
      },
    },
    examples: {
      outDir: path.resolve(__dirname, "examples/dist"),
      lib: {
        entry: path.resolve(__dirname, "examples/index.ts"),
        name: "examples",
        fileName: "index",
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "@ant-design/icons": "AntDesignIcons",
            antd: "Antd",
            dayjs: "Dayjs",
            "lodash-es": "LodashEs",
          },
        },
      },
    },
  }[mode]!;
};

const getDtsBuildConfig = (mode: string): PluginOptions => {
  return {
    main: {
      entryRoot: path.resolve(__dirname, "packages"),
      outDir: path.resolve(__dirname, "dist/types"),
    },
    examples: {
      entryRoot: path.resolve(__dirname, "examples"),
      outDir: path.resolve(__dirname, "examples/dist/types"),
    },
  }[mode]!;
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), dts(getDtsBuildConfig(mode))],
    resolve: {
      alias: [
        { find: "xph-crud", replacement: path.resolve(__dirname, "packages") },
      ],
    },
    build: getLibBuildConfig(mode),
  };
});
