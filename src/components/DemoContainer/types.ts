import type { FC, ReactNode } from 'react';

export interface DemoContainerProps {
  children?: ReactNode;
  disableBackButton?: boolean;
  items?: Record<string, FC>;
  title: string;
}
