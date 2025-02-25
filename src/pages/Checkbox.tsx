import CheckAll from '~demo/checkbox/check-all';
import Group from '~demo/checkbox/group';
import { DemoContainer } from '~ata/components';

export default function CheckboxPage() {
  return <DemoContainer title="Checkbox" items={{ CheckAll, Group }} />;
}
