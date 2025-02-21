import type { AntdComponents } from './types';

export default {
  Button: {
    borderColorDisabled: 'var(--color-disabled-dark)',
    colorBgContainer: 'transparent',
    colorError: 'var(--color-error-dark)',
    colorPrimary: 'var(--color-primary)',
  },
  Layout: {
    headerBg: 'var(--color-secondary)',
  },
  Menu: {
    itemBg: 'var(--color-primary-20)',
    subMenuItemBg: 'var(--color-primary-10)',
    darkItemBg: 'var(--color-primary)',
    darkSubMenuItemBg: 'var(--color-primary-60)',
    darkPopupBg: 'var(--color-primary-90)',
    darkItemSelectedBg: 'var(--color-secondary)',
    subMenuItemSelectedColor: 'var(--color-warning-dark)',
  },
  Select: {
    activeBorderColor: 'var(--color-secondary)',
    colorBorder: 'var(--color-primary)',
    colorText: 'var(--color-black)',
    hoverBorderColor: 'var(--color-secondary-60)',
    selectorBg: 'var(--color-content-layout)',
  },
} satisfies AntdComponents;
