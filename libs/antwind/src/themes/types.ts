import type { ThemeConfig } from 'antd';

export type AntdComponents = (dark: boolean) => NonNullable<ThemeConfig['components']>;
export type PaletteToken = (dark: boolean) => NonNullable<ThemeConfig['token']>;
