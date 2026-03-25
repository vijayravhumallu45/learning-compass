import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { metaImagesPlugin } from "./vite-plugin-meta-images";


export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    metaImagesPlugin(),
    tailwindcss(),
    ],
});
