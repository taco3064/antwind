import Block from '~demo/button/block';
import ColorVariant from '~demo/button/color-variant';
import Danger from '~demo/button/danger';
import Ghost from '~demo/button/ghost';
import Loading from '~demo/button/loading';
import Size from '~demo/button/size';
import { DemoContainer } from '~ata/components';

export default function ButtonPage() {
  return (
    <DemoContainer
      title="Button"
      items={{ Block, ColorVariant, Danger, Ghost, Loading, Size }}
    />
  );
}
