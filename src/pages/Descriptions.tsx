import Basic from '~demo/descriptions/basic';
import Border from '~demo/descriptions/border';
import Vertical from '~demo/descriptions/vertical';
import VerticalBorder from '~demo/descriptions/vertical-border';
import { DemoContainer } from '~ata/components';

export default function DescriptionsPage() {
  return (
    <DemoContainer
      ColProps={{ md: 16 }}
      title="Descriptions"
      items={{ Basic, Border, Vertical, VerticalBorder }}
    />
  );
}
