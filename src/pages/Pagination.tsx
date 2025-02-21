import Jump from '~demo/pagination/jump';
import Mini from '~demo/pagination/mini';
import { DemoContainer } from '~ata/components';

export default function PaginationPage() {
  return (
    <DemoContainer
      ColProps={{ md: 16, xl: 12 }}
      title="Pagination"
      items={{ Jump, Mini }}
    />
  );
}
