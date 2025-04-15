/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEMO_COMPONENTS: string[];
  readonly VITE_PALETTES: PaletteCode[];
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type PaletteCode = 'clinico' | 'ibelive' | 'wishlife' | 'custom';
