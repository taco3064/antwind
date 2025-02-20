import { Layout, Dropdown, Button, Typography } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

import {
  AppstoreOutlined,
  ArrowLeftOutlined,
  FormatPainterOutlined,
} from '@ant-design/icons';

import { TailantdThemeProvider } from '~ata/contexts';
import type { AppProps } from './types';
import type { TailantdThemeContextValue } from '~ata/contexts';
import type { PaletteCode } from '~ata/themes';

export default function App({ children }: AppProps) {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const paletteRef = useRef<TailantdThemeContextValue>(null);

  const handlePaletteChange = (palette: PaletteCode) => {
    if (paletteRef.current) {
      paletteRef.current.onPaletteChange(palette);
    }
  };

  return (
    <TailantdThemeProvider ref={paletteRef} palette="clinico">
      <Layout>
        <Layout.Header className="sticky top-0 z-100 flex flex-row items-center gap-2 px-4">
          {pathname === '/' ? (
            <AppstoreOutlined className="text-gray text-3xl mr-2" rotate={45} />
          ) : (
            <Button
              className="text-gray"
              icon={<ArrowLeftOutlined />}
              shape="circle"
              size="large"
              type="text"
              onClick={() => navigate('/')}
            />
          )}

          <Typography.Title level={3} className="text-white m-0">
            Tailantd Theme
          </Typography.Title>

          <Dropdown
            menu={{
              className: 'w-28',
              items: [
                {
                  key: 'clinico',
                  className: 'text-center text-base/2 min-h-10',
                  label: 'Clinico',
                  onClick: () => handlePaletteChange('clinico'),
                },
                {
                  key: 'ibelive',
                  className: 'text-center text-base/2 min-h-10',
                  label: 'IBelive',
                  onClick: () => handlePaletteChange('ibelive'),
                },
                {
                  key: 'wishlife',
                  className: 'text-center text-base/2 min-h-10',
                  label: 'Wishlife',
                  onClick: () => handlePaletteChange('wishlife'),
                },
              ],
            }}
          >
            <Button
              className="ml-auto text-gray"
              icon={<FormatPainterOutlined />}
              shape="circle"
              size="large"
              type="text"
            />
          </Dropdown>
        </Layout.Header>

        <Layout.Content className="px-4 py-2">{children}</Layout.Content>
      </Layout>
    </TailantdThemeProvider>
  );
}
