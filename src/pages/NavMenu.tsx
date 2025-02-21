import { Link } from 'react-router-dom';
import { List, Button, Typography } from 'antd';

import { DemoContainer } from '~ata/components';

export default function NavMenuPage() {
  return (
    <DemoContainer>
      <List
        split={false}
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
              <Button block variant="outlined" color="primary" className="capitalize">
                {component.replace(/-/g, ' ')}
              </Button>
            </Link>
          </List.Item>
        ))}
      </List>
    </DemoContainer>
  );
}
