
import path from "node:path";
import { fileURLToPath } from "node:url";
import { cloudflareTest, readD1Migrations } from "@cloudflare/vitest-plugin";
import { defineConfig } from "vitest/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    cloudflareTest(async () => {
      const migrationsPath = path.resolve(__dirname, "migrations");
      const migrations = await readD1Migrations(migrationsPath);

      return {
        wrangler: {
          configPath: path.resolve(__dirname, "wrangler.jsonc")
        },
        miniflare: {
          bindings: {
            TEST_MIGRATIONS: migrations
          }
        }
      };
    })
  ],

  test: {
    include: ["tests/**/*.test.ts"],
    environment: "node"
  }
});
