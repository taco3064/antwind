import fs from 'fs';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

import checkout from './checkout-antd';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  server: {
    open: true,
  },
  define: {
    'import.meta.env.VITE_PALETTES': JSON.stringify(
      fs
        .readdirSync(path.resolve(__dirname, './src/themes/palettes'))
        .filter((fileName) => /\.css$/.test(fileName))
        .map((fileName) => fileName.replace(/\.css$/, '')),
    ),
    'import.meta.env.VITE_DEMO_COMPONENTS': JSON.stringify(
      checkout({
        Alert: ['description', 'icon'],
        Badge: ['change', 'colorful', 'ribbon', 'status'],
        Button: ['block', 'color-variant', 'danger', 'ghost', 'loading', 'size'],
        Calendar: ['basic', 'card', 'week'],
        Card: ['basic', 'inner', 'loading'],
        Checkbox: ['check-all', 'group'],
        Collapse: ['basic', 'borderless', 'accordion'],
        Descriptions: ['basic', 'border', 'vertical', 'vertical-border'],
        Divider: ['plain', 'with-text'],
        Drawer: ['loading', 'placement'],
        Empty: ['basic', 'simple'],
        Form: ['size', 'variant'],
        List: ['basic', 'simple'],
        Menu: ['switch-mode'],
        Message: ['hooks', 'loading', 'other'],
        Modal: ['locale', 'static-info'],
        Notification: ['duration', 'with-icon'],
        Pagination: ['jump', 'mini'],
        Popconfirm: ['placement'],
        Popover: ['arrow', 'placement'],
        Radio: ['radiobutton', 'radiogroup-block', 'radiogroup-more'],
        Result: ['error', 'info', 'success', 'warning', '404'],
        Spin: ['delayAndDebounce'],
        Statistic: ['countdown', 'unit'],
        Steps: ['clickable', 'progress-dot'],
        Table: [
          'head',
          'row-selection-and-operation',
          'size',
          'tree-data',
          'virtual-list',
        ],
        Tabs: ['extra', 'size', 'slide'],
        Tag: ['basic', 'checkable', 'colorful', 'status'],
        Tooltip: ['arrow', 'placement'],
        Typography: ['text', 'title'],
      }),
    ),
  },
});
