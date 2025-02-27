import { Row, Col, List, Typography, Divider } from 'antd';
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
              <List.Item key={key}>
                <List.Item.Meta
                  title={
                    <Divider orientation="left">
                      <Typography.Title level={5}>{key}</Typography.Title>
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
