import type { PaletteToken } from './types';

export default {
  borderRadius: 8,
  colorBgBase: 'var(--color-content-base)',
  colorBgContainer: 'var(--color-content-paper)',
  colorBgLayout: 'var(--color-content-layout)',

  colorPrimary: 'var(--color-primary)',
  colorPrimaryActive: 'var(--color-gray)',
  colorPrimaryHover: 'var(--color-primary-60)',
  colorPrimaryBorderHover: 'var(--color-primary-60)',

  colorError: 'var(--color-error-dark)',
  colorErrorActive: 'var(--color-gray)',
  colorErrorHover: 'var(--color-error-divider)',
  colorErrorBorderHover: 'var(--color-error-divider)',

  colorInfo: 'var(--color-info-dark)',
  colorInfoActive: 'var(--color-gray)',
  colorInfoHover: 'var(--color-info-divider)',
  colorInfoBorderHover: 'var(--color-info-divider)',

  cyan: '#13C2C2',
  geekblue: '#2F54EB',
  lime: '#A0D911',
  magenta: '#EB2F96',
  orange: '#FA8C16',
  purple: '#722ED1',
  volcano: '#FA541C',
} satisfies PaletteToken;
