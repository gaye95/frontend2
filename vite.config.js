import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ["frontend2-1-dpgf.onrender.com"], // Ajoute l'hôte autorisé// Permet d'exposer sur 0.0.0.0 automatiquement
    port: 5173,
    proxy: {
      "/api": {
        target: "https://backend2-1-173j.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
