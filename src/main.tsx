import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@ant-design/v5-patch-for-react-19';

import routes from '~ata/pages';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider
      router={createBrowserRouter(routes, {
        basename: import.meta.env.VITE_ROUTER_BASENAME,
      })}
    />
  </StrictMode>,
);
