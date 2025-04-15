import type { FC } from 'react';

export interface CaseConfig {
  cols?: number;
  items: Record<string, FC>;
}

export type DemoCases = Record<string, { cols?: number; items: Record<string, FC> }>;
