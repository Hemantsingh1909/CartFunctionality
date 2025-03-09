// filepath: /Users/hemantsingh/Developer/cart_functionality/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/CartFunctionality/",
  plugins: [react()],
  server: {
    open: true,
  },
});
