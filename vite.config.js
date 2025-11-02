import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: './', 
  root: '.', 
  publicDir: 'public', 
  
  build: {
    outDir: 'dist', 
    emptyOutDir: true,
    
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]", 
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
