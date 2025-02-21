/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEMO_COMPONENTS: string[];
  readonly VITE_ROUTER_BASENAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
