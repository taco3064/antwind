import { Outlet, type RouteObject } from 'react-router-dom';
import { lazy } from 'react';

import { App } from '~ata/containers';

export default [
  {
    path: '/',
    element: (
      <App>
        <Outlet />
      </App>
    ),
    children: [
      {
        path: '/button',
        Component: lazy(() => import('./Button')),
      },
    ],
  },
] satisfies RouteObject[];
