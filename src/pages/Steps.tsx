import Clickable from '~demo/steps/clickable';
import ProgressDot from '~demo/steps/progress-dot';
import { DemoContainer } from '~ata/components';

export default function StepsPage() {
  return <DemoContainer title="Steps" items={{ Clickable, ProgressDot }} />;
}
