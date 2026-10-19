import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { imagetools } from "vite-imagetools";
import path from "node:path";
import { prerender } from "./prerender";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths(), imagetools(), prerender()],

  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    host: "::",
    port: 8080,
    strictPort: false,
  },
  preview: {
    host: "::",
    port: 8080,
  },
});
