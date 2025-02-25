import Basic from '~demo/auto-complete/basic';
import Status from '~demo/auto-complete/status';
import Variant from '~demo/auto-complete/variant';
import { DemoContainer } from '~ata/components';

export default function AutoCompletePage() {
  return <DemoContainer title="Auto Complete" items={{ Basic, Status, Variant }} />;
}
