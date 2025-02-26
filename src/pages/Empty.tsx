import Basic from '~demo/empty/basic';
import Simple from '~demo/empty/simple';
import { DemoContainer } from '~ata/components';

export default function EmptyPage() {
  return <DemoContainer title="Empty" items={{ Basic, Simple }} />;
}
