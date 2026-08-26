import { readFileSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const packageJson = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8")) as { version: string };
const updatedAt = new Date().toISOString().slice(0, 10);
const versionPayload = JSON.stringify({ version: packageJson.version, updatedAt }, null, 2);

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
    __APP_UPDATED_AT__: JSON.stringify(updatedAt)
  },
  plugins: [
    react(),
    {
      name: "histpoliticor-version",
      configureServer(server) {
        server.middlewares.use("/version.json", (_request, response) => {
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(versionPayload);
        });
      },
      generateBundle() {
        this.emitFile({ type: "asset", fileName: "version.json", source: versionPayload });
      }
    }
  ],
  build: {
    sourcemap: true
  }
});
