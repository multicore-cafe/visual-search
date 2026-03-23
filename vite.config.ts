import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "public",
  publicDir: false,
  // Relative asset URLs keep the production build working in both
  // local `vite preview` and the GitHub Pages `/visual-search/` subpath.
  base: "./",
  build: {
    outDir: "../build",
    emptyOutDir: true,
  },
  plugins: [react()],
});
