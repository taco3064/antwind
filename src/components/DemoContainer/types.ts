import type { FC } from 'react';

export interface DemoContainerProps {
  items: Record<string, FC>;
  title: string;
}
