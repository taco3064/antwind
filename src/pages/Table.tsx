import Head from '~demo/table/head';
import RowSelectionAndOperation from '~demo/table/row-selection-and-operation';
import Size from '~demo/table/size';
import TreeData from '~demo/table/tree-data';
import VirtualList from '~demo/table/virtual-list';
import { DemoContainer } from '~ata/components';

export default function TablePage() {
  return (
    <DemoContainer
      ColProps={{ md: 16 }}
      title="Table"
      items={{ Head, RowSelectionAndOperation, Size, TreeData, VirtualList }}
    />
  );
}
