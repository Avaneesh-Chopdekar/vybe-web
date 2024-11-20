import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        "privacy-policy": "./privacy-policy/index.html",
        "terms-of-service": "./terms-of-service/index.html",
      },
    },
  },
});
