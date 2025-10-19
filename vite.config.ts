import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  // ✅ Load .env variables for the current mode
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: "::",
      port: Number(env.VITE_PORT) ,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
