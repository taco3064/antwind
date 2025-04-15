import { useContext, useMemo } from 'react';
import { AntwindThemeContext } from '../../contexts';

export function useAntwindTheme<T extends string>() {
  const ctx = useContext(AntwindThemeContext);

  if (!ctx) {
    throw new Error('useAntwindTheme must be used within a AntwindThemeProvider');
  }

  return useMemo(() => {
    const { palette, onPaletteChange } = ctx;

    return {
      palette: palette as T,
      onPaletteChange: (e: T) => {
        if (!onPaletteChange) {
          throw new Error('Unsupport palette change');
        }

        onPaletteChange(e);
      },
    };
  }, [ctx]);
}
