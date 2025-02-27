import Countdown from '~demo/statistic/countdown';
import Unit from '~demo/statistic/unit';
import { DemoContainer } from '~ata/components';

export default function StatisticPage() {
  return <DemoContainer title="Statistic" items={{ Countdown, Unit }} />;
}
