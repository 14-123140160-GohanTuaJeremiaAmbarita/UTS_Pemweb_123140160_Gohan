import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs/promises";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "swap-index-html",
      enforce: "pre",
      async transformIndexHtml(html) {
        const alt = await fs.readFile(path.resolve(__dirname, "public/index.html"), "utf-8");
        return alt;
      }
    }
  ],
  server: {
    port: 5173
  }
});
