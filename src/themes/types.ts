import type { ThemeConfig } from 'antd';

export type AntdComponents = NonNullable<ThemeConfig['components']>;
export type PaletteCode = 'clinico' | 'ibelive' | 'wishlife';
export type PaletteToken = NonNullable<ThemeConfig['token']>;
