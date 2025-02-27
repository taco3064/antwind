import Basic from '~demo/list/basic';
import Simple from '~demo/list/simple';
import { DemoContainer } from '~ata/components';

export default function ListPage() {
  return <DemoContainer title="List" items={{ Basic, Simple }} />;
}
