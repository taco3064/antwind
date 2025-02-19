import { ConfigProvider, type ThemeConfig } from 'antd';
import { createContext, forwardRef, useImperativeHandle, useMemo, useState } from 'react';

import { components, token } from '~ata/themes';
import type { TailantdThemeContextValue, TailantdThemeProviderProps } from './types';

const ANTD_THEME: ThemeConfig = { components, token };

// eslint-disable-next-line react-refresh/only-export-components
export const TailantdThemeContext = createContext<TailantdThemeContextValue | undefined>(
  undefined,
);

export default forwardRef<TailantdThemeContextValue, TailantdThemeProviderProps>(
  function TailantdThemeProvider({ children, palette: defaultPalette }, ref) {
    const [palette, setPalette] = useState(defaultPalette);

    const context = useMemo<TailantdThemeContextValue>(
      () => ({ palette, onPaletteChange: setPalette }),
      [palette, setPalette],
    );

    useImperativeHandle(ref, () => context, [context]);

    return (
      <div data-theme={palette}>
        <ConfigProvider theme={ANTD_THEME}>
          <TailantdThemeContext value={context}>{children}</TailantdThemeContext>
        </ConfigProvider>
      </div>
    );
  },
);
