import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@ant-design/v5-patch-for-react-19';

import routes from '~ata/pages';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(routes)} />

    {/* <TailantdThemeProvider palette="clinico">
      <div className="font-bold text-error-dark">Hello, world!</div>
      <div className="font-bold text-secondary">Primary Color</div>

      <Button.Group>
        <Button type="primary">Primary</Button>

        <Button type="primary" danger>
          Danger
        </Button>

        <Button type="primary" ghost>
          Ghost
        </Button>

        <Button type="primary" ghost danger>
          Danger
        </Button>

        <Button type="primary" disabled>
          Disabled
        </Button>
      </Button.Group>

      <br />
      <br />

      <Button.Group>
        <Button variant="outlined" color="orange">
          Outlined
        </Button>

        <Button variant="filled" color="geekblue">
          Filled
        </Button>

        <Button variant="link" color="lime">
          Link
        </Button>

        <Button variant="solid" color="purple">
          Solid
        </Button>

        <Button variant="text" color="cyan">
          Text
        </Button>
      </Button.Group>
    </TailantdThemeProvider> */}
  </StrictMode>,
);
