import { getContrast } from './utils';
import type { AntdComponents } from './types';

export default ((dark) => ({
  Badge: {
    colorError: 'var(--color-error-dark)',
    colorInfo: 'var(--color-info-dark)',
    colorPrimary: 'var(--color-primary)',
    colorSuccess: 'var(--color-success-dark)',
    colorWarning: 'var(--color-warning-dark)',
  },
  Button: {
    borderColorDisabled: 'var(--color-disabled-dark)',
    colorBgContainer: 'transparent',
    colorError: 'var(--color-error-dark)',
    colorPrimary: 'var(--color-primary)',
    colorPrimaryText: 'var(--color-contrast)',
    defaultGhostBorderColor: 'var(--color-contrast)',
    defaultGhostColor: 'var(--color-contrast)',
    ghostBg: 'transparent',
  },
  Calendar: {
    colorBgContainer: 'var(--color-content-layout)',
    colorText: 'var(--color-contrast) !important',
    itemActiveBg: 'var(--color-content-base)',
  },
  Card: {
    headerBg: 'var(--color-content-base)',
    colorBgContainer: 'var(--color-content-layout)',
    colorBorderSecondary: 'var(--color-divider)',
    colorTextHeading: 'var(--color-primary)',
    actionsBg: 'transparent',
  },
  Checkbox: {
    colorBgContainer: 'var(--color-content-layout)',
    colorText: 'var(--color-primary)',
    colorPrimary: 'var(--color-primary)',
  },
  Collapse: {
    colorBgContainer: 'var(--color-content-layout)',
    colorText: 'var(--color-contrast)',
    colorTextHeading: 'var(--color-primary)',
    headerBg: 'var(--color-content-base)',
  },
  DatePicker: {
    activeBorderColor: 'var(--color-secondary)',
    cellHoverBg: 'var(--color-primary-20)',
    colorBgContainer: 'var(--color-content-layout)',
    colorBorder: 'var(--color-primary)',
    colorError: 'var(--color-error-dark)',
    colorInfo: 'var(--color-info-dark)',
    colorSuccess: 'var(--color-success-dark)',
    colorText: 'var(--color-contrast)',
    colorWarning: 'var(--color-warning-dark)',
    controlItemBgActive: 'var(--color-primary-20)',
    controlItemBgHover: 'var(--color-primary-20)',
    hoverBorderColor: 'var(--color-primary-20)',
  },
  Descriptions: {
    labelBg: 'var(--color-content-base)',
    labelColor: 'var(--color-muted)',
  },
  Divider: {
    colorTextHeading: 'var(--color-muted)',
    colorText: 'var(--color-muted)',
  },
  Dropdown: {
    colorBgElevated: 'var(--color-secondary)',
    colorText: 'var(--color-base)',
  },
  Empty: {
    colorTextDescription: 'var(--color-muted)',
  },
  Input: {
    activeBorderColor: 'var(--color-secondary)',
    colorBorder: 'var(--color-primary)',
    colorBgContainer: 'var(--color-content-layout)',
    colorError: 'var(--color-error-dark)',
    colorInfo: 'var(--color-info-dark)',
    colorSuccess: 'var(--color-success-dark)',
    colorText: 'var(--color-contrast)',
    colorWarning: 'var(--color-warning-dark)',
    hoverBorderColor: 'var(--color-primary-20)',
  },
  InputNumber: {
    activeBorderColor: 'var(--color-secondary)',
    colorBgContainer: 'var(--color-content-layout)',
    colorBorder: 'var(--color-primary)',
    colorError: 'var(--color-error-dark)',
    colorInfo: 'var(--color-info-dark)',
    colorSuccess: 'var(--color-success-dark)',
    colorText: 'var(--color-contrast)',
    colorWarning: 'var(--color-warning-dark)',
    filledHandleBg: 'var(--color-secondary)',
    handleBg: 'var(--color-secondary-80)',
    handleBorderColor: 'var(--color-divider)',
    hoverBorderColor: 'var(--color-primary-20)',
  },
  Layout: {
    headerBg: 'var(--color-secondary)',
  },
  Mentions: {
    activeBorderColor: 'var(--color-secondary)',
    colorBorder: 'var(--color-primary)',
    colorBgContainer: 'var(--color-content-layout)',
    colorError: 'var(--color-error-dark)',
    colorInfo: 'var(--color-info-dark)',
    colorSuccess: 'var(--color-success-dark)',
    colorText: 'var(--color-contrast)',
    colorWarning: 'var(--color-warning-dark)',
    hoverBorderColor: 'var(--color-primary-20)',
  },
  Menu: {
    darkItemBg: 'var(--color-primary)',
    darkItemSelectedBg: 'var(--color-secondary)',
    darkPopupBg: 'var(--color-primary-80)',
    darkSubMenuItemBg: 'var(--color-primary-80)',
    itemBg: `var(--color-primary-${getContrast(dark, 20)})`,
    itemSelectedColor: 'var(--color-muted)',
    subMenuItemBg: `var(--color-primary-${getContrast(dark, 10)})`,
    subMenuItemSelectedColor: 'var(--color-muted)',
  },
  Message: {
    colorBgElevated: 'var(--color-content-base)',
    colorError: 'var(--color-error-dark)',
    colorInfo: 'var(--color-info-dark)',
    colorPrimary: 'var(--color-primary)',
    colorSuccess: 'var(--color-success-dark)',
    colorWarning: 'var(--color-warning-dark)',
  },
  Notification: {
    colorBgElevated: 'var(--color-content-base)',
    colorError: 'var(--color-error-dark)',
    colorInfo: 'var(--color-info-dark)',
    colorPrimary: 'var(--color-primary)',
    colorSuccess: 'var(--color-success-dark)',
    colorWarning: 'var(--color-warning-dark)',
  },
  Pagination: {
    colorBgContainer: 'var(--color-content-layout)',
    colorBgTextHover: 'var(--color-soft)',
    colorBorder: 'var(--color-primary)',
    colorPrimary: 'var(--color-primary)',
    colorPrimaryHover: 'var(--color-muted)',
    colorText: 'var(--color-contrast)',
    colorTextDisabled: 'var(--color-disabled-dark)',
    itemActiveBg: 'transparent',
    itemActiveBgDisabled: 'var(--color-disabled-light)',
    itemActiveColorDisabled: 'var(--color-contrast)',
    itemBg: 'transparent',
  },
  Radio: {
    colorBgContainer: 'var(--color-content-layout)',
    colorText: 'var(--color-primary)',
    colorPrimary: 'var(--color-primary)',
    buttonCheckedColorDisabled: 'var(--color-muted)',
  },
  Result: {
    colorError: 'var(--color-error-dark)',
    colorInfo: 'var(--color-info-dark)',
    colorPrimary: 'var(--color-primary)',
    colorSuccess: 'var(--color-success-dark)',
    colorWarning: 'var(--color-warning-dark)',
  },
  Segmented: {
    itemColor: 'var(--color-muted)',
    itemSelectedBg: 'var(--color-primary)',
    itemSelectedColor: 'var(--color-base)',
  },
  Select: {
    activeBorderColor: 'var(--color-secondary)',
    colorBgElevated: 'var(--color-content-base)',
    colorBorder: 'var(--color-primary)',
    colorError: 'var(--color-error-dark)',
    colorInfo: 'var(--color-info-dark)',
    colorSuccess: 'var(--color-success-dark)',
    colorText: 'var(--color-contrast)',
    colorWarning: 'var(--color-warning-dark)',
    hoverBorderColor: 'var(--color-primary-20)',
    selectorBg: 'var(--color-content-layout)',
  },
  Skeleton: {
    gradientFromColor: 'var(--color-disabled-dark)',
    gradientToColor: 'var(--color-muted)',
  },
  Spin: {
    colorPrimary: 'var(--color-secondary)',
  },
  Statistic: {
    colorTextDescription: 'var(--color-muted)',
    colorTextHeading: 'var(--color-primary)',
  },
  Steps: {
    colorPrimary: 'var(--color-secondary)',
    colorText: 'var(--color-primary)',
    colorTextDescription: 'var(--color-muted)',
    controlItemBgActive: 'var(--color-secondary-20)',
  },
  Switch: {
    handleBg: 'var(--color-base)',
  },
  Table: {
    bodySortBg: `var(--color-secondary-${getContrast(dark, 10)})`,
    colorBgContainer: 'var(--color-content-layout)',
    expandIconBg: `var(--color-secondary-${getContrast(dark, 20)})`,
    headerBg: 'var(--color-content-base)',
    headerColor: 'var(--color-contrast)',
    headerSortActiveBg: `var(--color-secondary-${getContrast(dark, 40)})`,
    headerSortHoverBg: `var(--color-secondary-${getContrast(dark, 60)})`,
    rowHoverBg: 'var(--color-disabled-light)',
    rowSelectedBg: `var(--color-secondary-${getContrast(dark, 10)})`,
    rowSelectedHoverBg: 'var(--color-disabled-light)',
  },
  Tabs: {
    cardBg: `var(--color-primary-${getContrast(dark, 20)})`,
    colorBgContainer: 'var(--color-content-layout)',
    colorBorderSecondary: 'var(--color-divider)',
    inkBarColor: 'var(--color-primary)',
    itemColor: 'var(--color-contrast)',
    itemHoverColor: 'var(--color-muted)',
    itemSelectedColor: 'var(--color-primary)',
  },
  Tag: {
    colorError: 'var(--color-error-dark)',
    colorErrorBg: 'var(--color-error-light)',
    colorErrorBorder: 'var(--color-error-divider)',
    colorInfo: 'var(--color-info-dark)',
    colorInfoBg: 'var(--color-info-light)',
    colorInfoBorder: 'var(--color-info-divider)',
    colorPrimary: 'var(--color-primary)',
    colorSuccess: 'var(--color-success-dark)',
    colorSuccessBg: 'var(--color-success-light)',
    colorSuccessBorder: 'var(--color-success-divider)',
    colorWarning: 'var(--color-warning-dark)',
    colorWarningBg: 'var(--color-warning-light)',
    colorWarningBorder: 'var(--color-warning-divider)',
    defaultBg: 'var(--color-soft)',
    defaultColor: 'var(--color-muted)',
  },
  Tooltip: {
    colorBgSpotlight: 'var(--color-secondary)',
  },
  Typography: {
    colorError: 'var(--color-error-dark)',
    colorInfo: 'var(--color-info-dark)',
    colorLink: 'var(--color-primary)',
    colorSuccess: 'var(--color-success-dark)',
    colorText: 'var(--color-contrast)',
    colorTextDisabled: 'var(--color-disabled-dark)',
    colorTextHeading: 'var(--color-primary)',
    colorTextSecondary: 'var(--color-muted)',
    colorWarning: 'var(--color-warning-dark)',
  },
})) satisfies AntdComponents;
