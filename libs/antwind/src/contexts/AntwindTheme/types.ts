import type { ReactNode } from 'react';

export interface AntwindThemeContextValue<T extends string = string> {
  palette: T;
  onPaletteChange?: (palette: T) => void;
}

export interface AntwindThemeProviderProps<T extends string> {
  rootEl?: HTMLElement | (() => HTMLElement);
  children: ReactNode;
  dark?: boolean;
  value: T;
  onChange?: (e: T) => void;
}
