import Extra from '~demo/tabs/extra';
import Size from '~demo/tabs/size';
import Slide from '~demo/tabs/slide';
import { DemoContainer } from '~ata/components';

export default function TabsPage() {
  return (
    <DemoContainer ColProps={{ md: 16 }} title="Tabs" items={{ Extra, Size, Slide }} />
  );
}
