import { ConfigProvider, type ThemeConfig } from 'antd';
import { createContext, useEffect, useMemo } from 'react';

import { components, token } from '../../themes';
import type { AntwindThemeContextValue, AntwindThemeProviderProps } from './types';

const MAIN_CLASS = 'antwind-main';

export const AntwindThemeContext = createContext<AntwindThemeContextValue | undefined>(
  undefined,
);

export default function AntwindThemeProvider<T extends string>({
  rootEl = document.body,
  children,
  dark = false,
  value,
  onChange,
}: AntwindThemeProviderProps<T>) {
  const theme = useMemo<ThemeConfig>(
    () => ({
      components: components(dark),
      token: token(dark),
    }),
    [dark],
  );

  const context = useMemo<AntwindThemeContextValue>(
    () => ({
      palette: value,
      ...(onChange && {
        onPaletteChange: (e: string) => onChange(e as T),
      }),
    }),
    [value, onChange],
  );

  useEffect(() => {
    const el = typeof rootEl === 'function' ? rootEl() : rootEl;
    const className = `:${value}`;

    el.classList.toggle(className, true);
    el.classList.toggle(MAIN_CLASS, true);

    return () => {
      el.classList.toggle(className, false);
      el.classList.toggle(MAIN_CLASS, false);
    };
  }, [rootEl, value]);

  return (
    <ConfigProvider
      theme={theme}
      getPopupContainer={() => (typeof rootEl === 'function' ? rootEl() : rootEl)}
    >
      <AntwindThemeContext value={context}>{children}</AntwindThemeContext>
    </ConfigProvider>
  );
}
