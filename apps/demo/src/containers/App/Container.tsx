import { AntwindThemeProvider } from 'antwind';
import { Layout, Dropdown, Button, Typography } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import {
  AppstoreOutlined,
  ArrowRightOutlined,
  FormatPainterOutlined,
} from '@ant-design/icons';

import type { AppProps } from './types';

export default function App({ children }: AppProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [palette, setPalette] = useState<PaletteCode>('nocturne');

  return (
    <AntwindThemeProvider
      dark={palette === 'nocturne'}
      rootEl={() => document.getElementById('root')!}
      value={palette}
      onChange={setPalette}
    >
      <Layout.Header className="sticky top-0 z-100 flex flex-row items-center gap-2 px-4">
        <AppstoreOutlined className="text-gray text-3xl mr-2" rotate={45} />

        <Typography.Title level={3} className="text-white m-0">
          Antwind ({palette.replace(/^./, (char) => char.toUpperCase())})
        </Typography.Title>

        <Dropdown
          menu={{
            className: 'w-28',
            items: import.meta.env.VITE_PALETTES.map((code) => ({
              key: code,
              className: 'text-center min-h-10',
              label: code.replace(/^./, (char) => char.toUpperCase()),
              onClick: () => setPalette(code),
            })),
          }}
        >
          <Button
            className="ml-auto text-white"
            icon={<FormatPainterOutlined className="text-xl" />}
            shape="circle"
            size="large"
            type="text"
          />
        </Dropdown>

        {pathname !== '/' && (
          <Button
            className="text-white"
            icon={<ArrowRightOutlined className="text-xl" />}
            shape="circle"
            size="large"
            type="text"
            onClick={() => navigate('/')}
          />
        )}
      </Layout.Header>

      <Layout.Content className="px-4 py-2">{children}</Layout.Content>
    </AntwindThemeProvider>
  );
}
