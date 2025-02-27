import Basic from '~demo/calendar/basic';
import Card from '~demo/calendar/card';
import Week from '~demo/calendar/week';
import { DemoContainer } from '~ata/components';

export default function CalendarPage() {
  return <DemoContainer title="Calendar" items={{ Basic, Card, Week }} />;
}
