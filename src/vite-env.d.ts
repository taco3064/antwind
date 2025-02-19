/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_DEMO_COMPONENTS: string[];
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
