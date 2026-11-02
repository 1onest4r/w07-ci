import type { D1Database } from "@cloudflare/workers-types";

export interface TestEnv {
  DB: D1Database;
  TEST_MIGRATIONS: boolean;
  META: {
    url: string;
  };
}
