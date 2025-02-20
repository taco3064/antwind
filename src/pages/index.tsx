import { Link, Outlet, type RouteObject } from 'react-router-dom';
import { List, Typography } from 'antd';
import { lazy } from 'react';

import { App } from '~ata/containers';
import { DemoContainer } from '~ata/components';

export default [
  {
    path: '/',
    element: (
      <App>
        <Outlet />
      </App>
    ),
    children: verifyPages([
      {
        path: '/auto-complete',
        Component: lazy(() => import('./AutoComplete')),
      },
      {
        path: '/button',
        Component: lazy(() => import('./Button')),
      },
      {
        path: '/menu',
        Component: lazy(() => import('./Menu')),
      },
      {
        path: '/',
        element: (
          <DemoContainer>
            <List
              size="small"
              header={
                <Typography.Title level={4} className="text-center text-gray m-0">
                  Antd + Tailwind Demo
                </Typography.Title>
              }
            >
              {import.meta.env.VITE_DEMO_COMPONENTS.map((component) => (
                <List.Item key={component}>
                  <Link className="w-full" to={`/${component}`}>
                    <Typography.Title
                      className="text-center capitalize text-info-dark"
                      level={5}
                    >
                      {component.replace(/-/g, ' ')}
                    </Typography.Title>
                  </Link>
                </List.Item>
              ))}
            </List>
          </DemoContainer>
        ),
      },
    ]),
  },
] satisfies RouteObject[];

function verifyPages(pages: RouteObject[]) {
  const components = import.meta.env.VITE_DEMO_COMPONENTS;

  return pages.map((page) => {
    const { path } = page;
    const component = path?.replace(/^\//, '');

    if (path === '/' || (component && components.includes(component))) {
      return page;
    }

    return {
      path,
      element: (
        <DemoContainer title="Invalid Demo Component Setting">
          <Typography.Title level={4} className="text-gray text-center mt-8">
            "{component}" Is Not A Valid Demo Component.
            <br />
            Please Check "vite.config.ts".
          </Typography.Title>
        </DemoContainer>
      ),
    };
  });
}
