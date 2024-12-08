/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PROJECT_PASSWORD: string;
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_ANON_KEY: string;
  readonly ACTIVECAMPAIGN_API_KEY: string;
  readonly ACTIVECAMPAIGN_ACCOUNT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
