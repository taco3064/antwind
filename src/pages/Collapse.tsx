import Accordion from '~demo/collapse/accordion';
import Basic from '~demo/collapse/basic';
import Borderless from '~demo/collapse/borderless';
import { DemoContainer } from '~ata/components';

export default function CollapsePage() {
  return <DemoContainer title="Collapse" items={{ Accordion, Basic, Borderless }} />;
}
