import Duration from '~demo/notification/duration';
import WithIcon from '~demo/notification/with-icon';
import { DemoContainer } from '~ata/components';

export default function NotificationPage() {
  return <DemoContainer title="Notification" items={{ Duration, WithIcon }} />;
}
