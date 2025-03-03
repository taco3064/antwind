import Error from '~demo/result/error';
import Info from '~demo/result/info';
import Success from '~demo/result/success';
import Warning from '~demo/result/warning';
import E404 from '~demo/result/404';
import { DemoContainer } from '~ata/components';

export default function ResultPage() {
  return <DemoContainer title="Result" items={{ Error, Info, Success, Warning, E404 }} />;
}
