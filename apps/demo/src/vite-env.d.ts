/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEMO_COMPONENTS: string[];
  readonly VITE_PALETTES: PaletteCode[];
  readonly VITE_ROUTER_BASENAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type PaletteCode = 'nocturne' | 'pastella';
