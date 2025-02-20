import { ArrowLeftOutlined, FormatPainterOutlined } from '@ant-design/icons';
import { Layout, Dropdown, Button } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

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
        <Layout.Header className="sticky top-0 z-100 flex flex-row items-center">
          <Dropdown
            menu={{
              items: [
                {
                  key: 'clinico',
                  label: 'CL',
                  onClick: () => handlePaletteChange('clinico'),
                },
                {
                  key: 'ibelive',
                  label: 'IB',
                  onClick: () => handlePaletteChange('ibelive'),
                },
                {
                  key: 'wishlife',
                  label: 'WL',
                  onClick: () => handlePaletteChange('wishlife'),
                },
              ],
            }}
          >
            <Button
              className="ml-auto text-white"
              icon={<FormatPainterOutlined />}
              shape="circle"
              size="large"
              type="text"
            />
          </Dropdown>

          {pathname !== '/' && (
            <Button
              className="ml-2 text-white"
              icon={<ArrowLeftOutlined />}
              shape="circle"
              size="large"
              type="text"
              onClick={() => navigate('/')}
            />
          )}
        </Layout.Header>

        <Layout.Content className="px-4 py-2">{children}</Layout.Content>
      </Layout>
    </TailantdThemeProvider>
  );
}
