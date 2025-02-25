import Basic from '~demo/cascader/basic';
import DisabledOption from '~demo/cascader/disabled-option';
import Multiple from '~demo/cascader/multiple';
import Status from '~demo/cascader/status';
import Variant from '~demo/cascader/variant';
import { DemoContainer } from '~ata/components';

export default function CascaderPage() {
  return (
    <DemoContainer
      title="Cascader"
      items={{ Basic, DisabledOption, Multiple, Status, Variant }}
    />
  );
}
