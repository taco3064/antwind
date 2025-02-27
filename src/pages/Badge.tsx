import Change from '~demo/badge/change';
import Colorful from '~demo/badge/colorful';
import Ribbon from '~demo/badge/ribbon';
import Status from '~demo/badge/status';
import { DemoContainer } from '~ata/components';

export default function BadgePage() {
  return <DemoContainer title="Badge" items={{ Change, Colorful, Ribbon, Status }} />;
}
