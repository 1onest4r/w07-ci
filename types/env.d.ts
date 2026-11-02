interface Env {
  DB: D1Database;
  META: KVNamespace;
}

declare namespace Cloudflare {
  interface Env {
    TEST_MIGRATIONS: Parameters<typeof import("cloudflare:test").applyD1Migrations>[1];
  }
}