import Hooks from '~demo/message/hooks';
import Loading from '~demo/message/loading';
import Other from '~demo/message/other';
import { DemoContainer } from '~ata/components';

export default function MessagePage() {
  return <DemoContainer title="Message" items={{ Hooks, Loading, Other }} />;
}
