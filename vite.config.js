import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: false, // Disable minification in development
  },
  define: {
    'process.env.NODE_ENV': '"development"', // Set the environment to development
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
