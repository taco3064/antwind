import { Row, Col, List, Typography, Divider } from 'antd';
import type { DemoContainerProps } from './types';

export default function DemoContainer({ items, title }: DemoContainerProps) {
  return (
    <Row justify="center">
      <Col xs={24} md={12}>
        <List
          header={<Typography.Title level={4}>{title}</Typography.Title>}
          dataSource={Object.entries(items)}
          renderItem={([key, Demo]) => (
            <List.Item key={key}>
              <List.Item.Meta
                title={
                  <Divider orientation="left">
                    <Typography.Title level={5}>{key}</Typography.Title>
                  </Divider>
                }
                description={<Demo />}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
}
