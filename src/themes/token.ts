import type { PaletteToken } from './types';

export default {
  borderRadius: 8,
  colorBorder: 'var(--color-divider)',
  colorSplit: 'var(--color-divider)',

  colorBgBase: 'var(--color-content-base)',
  colorBgContainer: 'var(--color-content-paper)',
  colorBgContainerDisabled: 'var(--color-disabled-light)',
  colorBgElevated: 'var(--color-content-base)',
  colorBgLayout: 'var(--color-content-layout)',

  colorPrimary: 'var(--color-primary)',
  colorPrimaryActive: 'var(--color-gray)',
  colorPrimaryBg: 'var(--color-primary-10)',
  colorPrimaryBorderHover: 'var(--color-primary-60)',
  colorPrimaryHover: 'var(--color-primary-60)',

  colorError: 'var(--color-error-dark)',
  colorErrorActive: 'var(--color-gray)',
  colorErrorBg: 'var(--color-error-light)',
  colorErrorBorderHover: 'var(--color-error-divider)',
  colorErrorHover: 'var(--color-error-divider)',

  colorInfo: 'var(--color-info-dark)',
  colorInfoActive: 'var(--color-gray)',
  colorInfoBg: 'var(--color-info-light)',
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
