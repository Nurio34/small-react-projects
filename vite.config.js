import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/small-react-projects/",
    build: {
        outDir: "build",
    },
    plugins: [react()],
});
