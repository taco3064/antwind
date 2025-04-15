import { lazy } from 'react';
import type { DemoCases } from './types';

export default {
  Alert: {
    items: {
      Description: lazy(() => import('~antd/alert/description')),
      Icon: lazy(() => import('~antd/alert/icon')),
    },
  },
  Badge: {
    items: {
      Change: lazy(() => import('~antd/badge/change')),
      Colorful: lazy(() => import('~antd/badge/colorful')),
      Ribbon: lazy(() => import('~antd/badge/ribbon')),
      Status: lazy(() => import('~antd/badge/status')),
    },
  },
  Button: {
    items: {
      Block: lazy(() => import('~antd/button/block')),
      ColorVariant: lazy(() => import('~antd/button/color-variant')),
      Danger: lazy(() => import('~antd/button/danger')),
      Ghost: lazy(() => import('~antd/button/ghost')),
      Loading: lazy(() => import('~antd/button/loading')),
      Size: lazy(() => import('~antd/button/size')),
    },
  },
  Calendar: {
    items: {
      Basic: lazy(() => import('~antd/calendar/basic')),
      Card: lazy(() => import('~antd/calendar/card')),
      Week: lazy(() => import('~antd/calendar/week')),
    },
  },
  Card: {
    items: {
      Basic: lazy(() => import('~antd/card/basic')),
      Inner: lazy(() => import('~antd/card/inner')),
      Loading: lazy(() => import('~antd/card/loading')),
    },
  },
  Checkbox: {
    items: {
      CheckAll: lazy(() => import('~antd/checkbox/check-all')),
      Group: lazy(() => import('~antd/checkbox/group')),
    },
  },
  Collapse: {
    items: {
      Accordion: lazy(() => import('~antd/collapse/accordion')),
      Basic: lazy(() => import('~antd/collapse/basic')),
      Borderless: lazy(() => import('~antd/collapse/borderless')),
    },
  },
  Descriptions: {
    cols: 16,
    items: {
      Basic: lazy(() => import('~antd/descriptions/basic')),
      Border: lazy(() => import('~antd/descriptions/border')),
      Vertical: lazy(() => import('~antd/descriptions/vertical')),
      VerticalBorder: lazy(() => import('~antd/descriptions/vertical-border')),
    },
  },
  Divider: {
    items: {
      Plain: lazy(() => import('~antd/divider/plain')),
      WithText: lazy(() => import('~antd/divider/with-text')),
    },
  },
  Drawer: {
    items: {
      Loading: lazy(() => import('~antd/drawer/loading')),
      Placement: lazy(() => import('~antd/drawer/placement')),
    },
  },
  Empty: {
    items: {
      Basic: lazy(() => import('~antd/empty/basic')),
      Simple: lazy(() => import('~antd/empty/simple')),
    },
  },
  Form: {
    items: {
      Size: lazy(() => import('~antd/form/size')),
      Variant: lazy(() => import('~antd/form/variant')),
    },
  },
  List: {
    items: {
      Basic: lazy(() => import('~antd/list/basic')),
      Simple: lazy(() => import('~antd/list/simple')),
    },
  },
  Menu: {
    items: {
      SwitchMode: lazy(() => import('~antd/menu/switch-mode')),
    },
  },
  Message: {
    items: {
      Hooks: lazy(() => import('~antd/message/hooks')),
      Loading: lazy(() => import('~antd/message/loading')),
      Other: lazy(() => import('~antd/message/other')),
    },
  },
  Modal: {
    items: {
      Locale: lazy(() => import('~antd/modal/locale')),
      StaticInfo: lazy(() => import('~antd/modal/static-info')),
    },
  },
  Notification: {
    items: {
      Duration: lazy(() => import('~antd/notification/duration')),
      WithIcon: lazy(() => import('~antd/notification/with-icon')),
    },
  },
  Pagination: {
    cols: 16,
    items: {
      Jump: lazy(() => import('~antd/pagination/jump')),
      Mini: lazy(() => import('~antd/pagination/mini')),
    },
  },
  Popconfirm: {
    items: {
      Placement: lazy(() => import('~antd/popconfirm/placement')),
    },
  },
  Popover: {
    items: {
      Arrow: lazy(() => import('~antd/popover/arrow')),
      Placement: lazy(() => import('~antd/popover/placement')),
    },
  },
  Radio: {
    items: {
      Radiobutton: lazy(() => import('~antd/radio/radiobutton')),
      RadiogroupBlock: lazy(() => import('~antd/radio/radiogroup-block')),
      RadiogroupMore: lazy(() => import('~antd/radio/radiogroup-more')),
    },
  },
  Result: {
    items: {
      Error: lazy(() => import('~antd/result/error')),
      Info: lazy(() => import('~antd/result/info')),
      Success: lazy(() => import('~antd/result/success')),
      Warning: lazy(() => import('~antd/result/warning')),
      NotFound: lazy(() => import('~antd/result/404')),
    },
  },
  Spin: {
    items: {
      DelayAndDebounce: lazy(() => import('~antd/spin/delayAndDebounce')),
    },
  },
  Statistic: {
    items: {
      Countdown: lazy(() => import('~antd/statistic/countdown')),
      Unit: lazy(() => import('~antd/statistic/unit')),
    },
  },
  Steps: {
    items: {
      Clickable: lazy(() => import('~antd/steps/clickable')),
      ProgressDot: lazy(() => import('~antd/steps/progress-dot')),
    },
  },
  Table: {
    cols: 16,
    items: {
      Head: lazy(() => import('~antd/table/head')),
      RowSelectionAndOperation: lazy(
        () => import('~antd/table/row-selection-and-operation'),
      ),
      Size: lazy(() => import('~antd/table/size')),
      TreeData: lazy(() => import('~antd/table/tree-data')),
      VirtualList: lazy(() => import('~antd/table/virtual-list')),
    },
  },
  Tabs: {
    items: {
      Extra: lazy(() => import('~antd/tabs/extra')),
      Size: lazy(() => import('~antd/tabs/size')),
      Slide: lazy(() => import('~antd/tabs/slide')),
    },
  },
  Tag: {
    items: {
      Basic: lazy(() => import('~antd/tag/basic')),
      Checkable: lazy(() => import('~antd/tag/checkable')),
      Colorful: lazy(() => import('~antd/tag/colorful')),
      Status: lazy(() => import('~antd/tag/status')),
    },
  },
  Tooltip: {
    items: {
      Arrow: lazy(() => import('~antd/tooltip/arrow')),
      Placement: lazy(() => import('~antd/tooltip/placement')),
    },
  },
  Typography: {
    items: {
      Text: lazy(() => import('~antd/typography/text')),
      Title: lazy(() => import('~antd/typography/title')),
    },
  },
} satisfies DemoCases;
