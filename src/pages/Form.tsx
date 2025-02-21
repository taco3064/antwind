import Size from '~demo/form/size';
import Variant from '~demo/form/variant';
import { DemoContainer } from '~ata/components';

export default function FormPage() {
  return <DemoContainer title="Form" items={{ Size, Variant }} />;
}
