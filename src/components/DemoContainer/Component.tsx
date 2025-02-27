import { LinkOutlined } from '@ant-design/icons';
import { Row, Col, List, Button, Typography, Divider, message } from 'antd';

import type { DemoContainerProps } from './types';

export default function DemoContainer({
  ColProps = { md: 12 },
  children,
  items,
  title,
}: DemoContainerProps) {
  return (
    <Row justify="center">
      <Col {...ColProps} xs={24}>
        {!items ? (
          children
        ) : (
          <List
            dataSource={Object.entries(items)}
            split={false}
            header={
              <Typography.Title className="m-0 text-gray" level={4}>
                {title}
              </Typography.Title>
            }
            renderItem={([key, Demo]) => (
              <List.Item key={key} id={key}>
                <List.Item.Meta
                  title={
                    <Divider orientation="left">
                      <Typography.Title level={5}>
                        <Button
                          type="text"
                          shape="circle"
                          icon={<LinkOutlined />}
                          onClick={() => {
                            const { origin, pathname } = location;
                            const url = `${origin}${pathname}#${key}`;

                            navigator.clipboard.writeText(url);
                            location.hash = key;
                            message.success(`Copied to clipboard:${url}`);
                          }}
                        />

                        {key}
                      </Typography.Title>
                    </Divider>
                  }
                  description={
                    <div className="px-4">
                      <Demo />
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        )}
      </Col>
    </Row>
  );
}
