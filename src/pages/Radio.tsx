import RadioStyle from '~demo/radio/radiobutton';
import BlockRadioGroup from '~demo/radio/radiogroup-block';
import VerticalRadioGroup from '~demo/radio/radiogroup-more';
import { DemoContainer } from '~ata/components';

export default function RadioPage() {
  return (
    <DemoContainer
      title="Radio"
      items={{ RadioStyle, BlockRadioGroup, VerticalRadioGroup }}
    />
  );
}
