import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

import checkout from './checkout-antd';

const BASENAME = process.env.NODE_ENV !== 'production' ? '/' : '/tailantd-architect';

// https://vite.dev/config/
export default defineConfig({
  base: BASENAME,
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  server: {
    open: true,
  },
  define: {
    'import.meta.env.VITE_ROUTER_BASENAME': JSON.stringify(BASENAME),

    'import.meta.env.VITE_DEMO_COMPONENTS': JSON.stringify(
      checkout({
        Alert: ['description', 'icon'],
        AutoComplete: ['basic', 'status', 'variant'],
        Badge: ['change', 'colorful', 'ribbon', 'status'],
        Button: ['block', 'color-variant', 'danger', 'ghost', 'loading', 'size'],
        Calendar: ['basic', 'card', 'week'],
        Card: ['basic', 'inner', 'loading'],
        Cascader: ['basic', 'disabled-option', 'multiple', 'status', 'variant'],
        Checkbox: ['check-all', 'group'],
        Collapse: ['basic', 'borderless', 'accordion'],
        Descriptions: ['basic', 'border', 'vertical', 'vertical-border'],
        Divider: ['plain', 'with-text'],
        Drawer: ['loading', 'placement'],
        Empty: ['basic', 'simple'],
        Form: ['size', 'variant'],
        List: ['basic', 'simple'],
        Menu: ['switch-mode'],
        Pagination: ['jump', 'mini'],
        Popover: ['arrow', 'placement'],
        Radio: ['radiobutton', 'radiogroup-block', 'radiogroup-more'],
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
