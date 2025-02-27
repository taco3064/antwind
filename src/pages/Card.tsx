import Basic from '~demo/card/basic';
import Inner from '~demo/card/inner';
import Loading from '~demo/card/loading';
import { DemoContainer } from '~ata/components';

export default function CardPage() {
  return <DemoContainer title="Card" items={{ Basic, Inner, Loading }} />;
}
