import Basic from '~demo/tag/basic';
import Checkable from '~demo/tag/checkable';
import Colorful from '~demo/tag/colorful';
import Status from '~demo/tag/status';
import { DemoContainer } from '~ata/components';

export default function TagPage() {
  return <DemoContainer title="Tag" items={{ Basic, Checkable, Colorful, Status }} />;
}
