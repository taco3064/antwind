import type { AntdComponents } from './types';

export default {
  Button: {
    borderColorDisabled: 'var(--color-disabled-dark)',
    colorBgContainer: 'transparent',
    colorError: 'var(--color-error-dark)',
    colorPrimary: 'var(--color-primary)',
    defaultGhostBorderColor: 'var(--color-black)',
    defaultGhostColor: 'var(--color-black)',
    ghostBg: 'transparent',
  },
  Layout: {
    headerBg: 'var(--color-secondary)',
  },
  Menu: {
    itemSelectedColor: 'var(--color-info-dark)',
    itemBg: 'var(--color-primary-20)',
    subMenuItemBg: 'var(--color-primary-10)',
    darkItemBg: 'var(--color-primary)',
    darkSubMenuItemBg: 'var(--color-primary-60)',
    darkPopupBg: 'var(--color-primary-90)',
    darkItemSelectedBg: 'var(--color-secondary)',
    subMenuItemSelectedColor: 'var(--color-orange-dark)',
  },
  Pagination: {
    colorBgTextHover: 'var(--color-primary-20)',
    colorText: 'var(--color-black)',
    colorBorderSecondary: 'red',
    itemActiveBg: 'var(--color-primary-10)',
    itemActiveColorDisabled: 'var(--color-black)',
    itemBg: 'transparent',
  },
  Select: {
    activeBorderColor: 'var(--color-secondary)',
    colorBorder: 'var(--color-primary)',
    colorError: 'var(--color-error-dark)',
    colorInfo: 'var(--color-info-dark)',
    colorSuccess: 'var(--color-success-dark)',
    colorText: 'var(--color-black)',
    colorWarning: 'var(--color-warning-dark)',
    hoverBorderColor: 'var(--color-secondary-60)',
    selectorBg: 'var(--color-content-layout)',
  },
} satisfies AntdComponents;
