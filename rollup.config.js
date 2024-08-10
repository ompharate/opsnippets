import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import url from "rollup-plugin-url"; // Import the URL plugin

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "demo",
  },
  external: ["react", "react-dom"],
  plugins: [
    typescript({ tsconfig: "tsconfig.json" }),
    url({
      // Inline files smaller than 10 kbytes
      limit: 10 * 1024,
      // Output the files in a specific directory if the limit is exceeded
      fileName: '[name].[hash][extname]',
    }),
  ],
});
