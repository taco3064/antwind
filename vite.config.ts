import fs from 'fs';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

const BASENAME = process.env.NODE_ENV !== 'production' ? '/' : '/antd-theme-architect';

// https://vite.dev/config/
export default defineConfig({
  base: BASENAME,
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  server: {
    open: true,
  },
  define: {
    'import.meta.env.VITE_DEMO_COMPONENTS': JSON.stringify(
      fs.readdirSync(path.resolve(__dirname, './src/checkouts')),
    ),
    'import.meta.env.VITE_ROUTER_BASENAME': JSON.stringify(BASENAME),
  },
});
