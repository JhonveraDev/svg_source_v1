import type { ReactNode } from "react";

export interface SvgContentProps {
  count: number;
  label: string;
  children: ReactNode;
  emptyMessage?: ReactNode;
}