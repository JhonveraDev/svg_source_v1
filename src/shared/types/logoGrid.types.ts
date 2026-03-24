import type { ReactNode } from "react";

export interface LogoGridProps {
  label: string;
  containerClass: string;
  emptyMessage?: ReactNode;
  category?: string;
  onlyFavorites?: boolean;
}