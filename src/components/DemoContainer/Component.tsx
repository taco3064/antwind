import { Row, Col, List, Button, Typography, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';

import type { DemoContainerProps } from './types';

export default function DemoContainer({
  children,
  disableBackButton = false,
  items,
  title,
}: DemoContainerProps) {
  const navigate = useNavigate();

  return (
    <Row justify="center">
      <Col xs={24} md={12}>
        {!items ? (
          <>
            <Typography.Title level={3} className="text-center">
              {title}
            </Typography.Title>
            {children}
          </>
        ) : (
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
        )}

        {!disableBackButton && (
          <>
            <Divider />

            <Button block size="large" variant="outlined" onClick={() => navigate(-1)}>
              Back
            </Button>
          </>
        )}
      </Col>
    </Row>
  );
}
