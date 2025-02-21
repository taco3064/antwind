import type { FC, ReactNode } from 'react';
import type { ColProps } from 'antd';

export interface DemoContainerProps {
  ColProps?: Pick<ColProps, 'sm' | 'md' | 'lg' | 'xl'>;
  children?: ReactNode;
  items?: Record<string, FC>;
  title?: string;
}
