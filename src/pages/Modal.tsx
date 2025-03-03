import Locale from '~demo/modal/locale';
import StaticInfo from '~demo/modal/static-info';
import { DemoContainer } from '~ata/components';

export default function ModalPage() {
  return <DemoContainer title="Modal" items={{ Locale, StaticInfo }} />;
}
