import ColorVariant from '~demo/button/color-variant';
import Danger from '~demo/button/danger';
import Ghost from '~demo/button/ghost';
import Loading from '~demo/button/loading';
import { DemoContainer } from '~ata/components';

export default function ButtonPage() {
  return (
    <DemoContainer title="Button" items={{ ColorVariant, Danger, Ghost, Loading }} />
  );
}
