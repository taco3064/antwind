import type { FC, ReactNode } from 'react';

export interface DemoContainerProps {
  children?: ReactNode;
  items?: Record<string, FC>;
  title?: string;
}
