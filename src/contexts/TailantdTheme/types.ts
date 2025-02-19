import type { ReactNode } from 'react';
import type { PaletteCode } from '~ata/themes';

export interface TailantdThemeContextValue {
  palette: PaletteCode;
  onPaletteChange: (palette: PaletteCode) => void;
}

export interface TailantdThemeProviderProps {
  children: ReactNode;
  palette: PaletteCode;
}
