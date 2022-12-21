import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crx({
      manifest: {
        manifest_version: 3,
        name: "Jp Immersion",
        version: "1.0.0",
        action: { default_popup: "index.html" },
        content_scripts: [
          {
            matches: ["<all_urls>"],
            include_globs: ["https://www.deepl.com/translator#ja/*"],
            js: ["content-scripts/index.ts"],
            all_frames: false,
            run_at: "document_end",
          },
        ],
      },
    }),
  ],
});
