import Plain from '~demo/divider/plain';
import WithText from '~demo/divider/with-text';
import { DemoContainer } from '~ata/components';

export default function DividerPage() {
  return <DemoContainer title="Divider" items={{ Plain, WithText }} />;
}
