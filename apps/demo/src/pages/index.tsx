import { Outlet, type RouteObject } from 'react-router-dom';

import DemoCases from './const';
import NavMenuPage from './NavMenu';
import { App } from '~demo/containers';
import { DemoContainer } from '~demo/components';
import type { CaseConfig } from './types';

export default [
  {
    path: '/',
    element: (
      <App>
        <Outlet />
      </App>
    ),
    children: [
      { path: '/', element: <NavMenuPage /> },
      ...Object.entries(DemoCases).map(
        ([title, { cols = 12, items }]: [string, CaseConfig]) => ({
          path: title,
          element: <DemoContainer {...{ title, items }} ColProps={{ md: cols }} />,
        }),
      ),
    ],
  },
] satisfies RouteObject[];
